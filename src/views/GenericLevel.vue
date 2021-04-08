<template>
  <div class="easy-body">
    <nav>
      <div class="logo"><MiniLogo /></div>
      <div class="timer">
        <p>{{ formattedElapsedTime }}</p>
      </div>
      <div class="score">score:{{ Math.floor(score) }}</div>
    </nav>
    <div class="card-container">
      <BasicCard
        v-for="card in cards"
        :urlPath="card.value"
        :gameMode="'easy'"
        :id="card.id"
        :key="card.id"
        :selected="card.selected"
        @click="selectCard(card)"
      ></BasicCard>
    </div>
    <BasicFooter :icons="false" />
  </div>
</template>

<script>
import BasicCard from "../components/BasicCard.vue";
import MiniLogo from "../components/MiniLogo.vue";
import BasicFooter from "../components/BasicFooter.vue";
import { genereteCardDeck } from "../utils/generalUtils";
export default {
  name: "GenericLevel",
  components: { BasicCard, MiniLogo, BasicFooter },
  props: ["deck", "level", "numberOfCards"],
  data() {
    return {
      cards: [],
      firstCard: null,
      secondCard: null,
      isLoading: false,
      multiplier: 1,
      score: 0,
      elapsedTime: 0,
      timer: undefined,
    };
  },
  methods: {
    selectCard(card) {
      const resetCards = () => {
        this.firstCard = null;
        this.secondCard = null;
        this.isLoading = false;
      };
      !this.timer && this.startTimer();
      if (!this.isLoading) {
        if (!card.selected) {
          let field = this.firstCard == null ? "firstCard" : "secondCard";
          card.selected = true;
          this[field] = card;
        }
        if (this.firstCard && this.secondCard) {
          this.isLoading = true;
          if (this.firstCard.value == this.secondCard.value) {
            resetCards();
            ++this.multiplier;
            this.score += 100 * this.multiplier ** 2 + this.score / 3;
          } else {
            setTimeout(() => {
              this.firstCard.selected = false;
              this.secondCard.selected = false;
              this.multiplier = 1;
              resetCards();
            }, 500);
          }
        }
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(20, 5);
    },
    gameFinished() {
      return this.cards.every((card) => card.selected);
    },
  },
  mounted() {
    this.cards = genereteCardDeck(this.numberOfCards, this.deck, this.cards);
  },
  watch: {
    gameFinished() {
      this.score = this.score * (2 - this.elapsedTime / 100000);
      this.stopTimer();
    },
  },
};
</script>

<style lang="scss" scoped>
.easy-body {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("../assets/background/easy_background.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-family: Poppins;
    .logo {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .timer {
      font-weight: 800;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
      }
    }
    .score {
      width: 25%;
      height: 100%;
      display: flex;
      font-weight: 100;
      align-items: center;
      justify-content: center;
    }
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
  }
}
</style>
