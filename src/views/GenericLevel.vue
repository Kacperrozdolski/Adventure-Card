<template>
  <div :class="`level-container level-container--${levelSettings.name}`">
    <GameFinished v-if="gameFinished" :score="score" />
    <nav>
      <div class="logo"><MiniLogo /></div>
      <div class="timer">
        <p>{{ formattedElapsedTime }}</p>
      </div>
      <div class="score">score:{{ Math.floor(score) }}</div>
    </nav>
    <div
      :class="`level-container__cards level-container__cards--${levelSettings.name}`"
    >
      <BasicCard
        v-for="card in cards"
        :card="card"
        :levelSettings="levelSettings"
        :key="card.id"
        @click="selectCard(card)"
      ></BasicCard>
    </div>
    <BasicFooter :icons="false" />
  </div>
</template>

<script>
import BasicCard from "../components/BasicCard.vue";
import GameFinished from "./GameFinished.vue";
import MiniLogo from "../components/MiniLogo.vue";
import BasicFooter from "../components/BasicFooter.vue";
import { generateCardDeck } from "../utils/generalUtils";
export default {
  name: "GenericLevel",
  components: { BasicCard, MiniLogo, BasicFooter, GameFinished },
  props: ["levelSettings"],
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
            this.score += 100 * this.multiplier ** 2 + this.score / 3;
            ++this.multiplier;
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
    this.cards = generateCardDeck(
      this.levelSettings.numberOfCards,
      this.levelSettings.icons,
      this.cards
    );
  },
  watch: {
    gameFinished() {
      this.$store.dispatch("getRanking");
      this.score = this.score * Math.abs(this.elapsedTime / 10000 - 5);
      this.stopTimer();
    },
  },
};
</script>

<style lang="scss" scoped>
.level-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  &--easy {
    background-image: url("../assets/background/easy_background.png");
  }
  &--medium {
    background-image: url("../assets/background/medium_background.png");
  }
  &--hard {
    background-image: url("../assets/background/hard_background.png");
  }

  nav {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-family: Poppins;
    .logo {
      width: 25%;
      height: 20vh;
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
  &__cards {
    display: grid;
    grid-gap: 20px;
    margin: auto 0;
    &--easy {
      grid-template: repeat(3, 1fr) / repeat(4, 1fr);
    }
    &--medium {
      grid-template: repeat(2, 1fr) / repeat(8, 1fr);
    }
    &--hard {
      grid-template: repeat(3, 1fr) / repeat(6, 1fr);
    }
  }
}
</style>
