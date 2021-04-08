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
      <component
        v-for="card in cards"
        :urlPath="card.value"
        :gameMode="'easy'"
        :id="card.id"
        :key="card.id"
        :is="'BasicCard'"
        :selected="card.selected"
        @click="selected(card.id)"
      ></component>
    </div>
    <BasicFooter :icons="false" />
  </div>
</template>

<script>
import BasicCard from "../components/BasicCard.vue";
import MiniLogo from "../components/MiniLogo.vue";
import BasicFooter from "../components/BasicFooter.vue";
export default {
  name: "EasyMode",
  components: { BasicCard, MiniLogo, BasicFooter },
  data() {
    return {
      cards: [],
      firstCard: undefined,
      secondCard: undefined,
      wait: false,
      multiplier: 1,
      score: 0,
      elapsedTime: 0,
      timer: undefined,
    };
  },
  methods: {
    genereteCardDeck(num) {
      for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
          this.cards.push({
            id: i,
            value: "brownCandy",
            selected: false,
          });
        }
        if (i == 2 || i == 3) {
          this.cards.push({
            id: i,
            value: "chocoCandy",
            selected: false,
          });
        }
        if (i == 4 || i == 5) {
          this.cards.push({
            id: i,
            value: "donutCandy",
            selected: false,
          });
        }
        if (i == 6 || i == 7) {
          this.cards.push({
            id: i,
            value: "greenCandy",
            selected: false,
          });
        }
        if (i == 8 || i == 9) {
          this.cards.push({
            id: i,
            value: "pinkCandy",
            selected: false,
          });
        }
        if (i == 10 || i == 11) {
          this.cards.push({
            id: i,
            value: "strawCandy",
            selected: false,
          });
        }
      }
      this.shuffleArray(this.cards);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },
    selected(cardId) {
      if (this.timer == undefined) {
        this.startTimer();
      }
      if (this.wait == false) {
        if (this.firstCard == undefined) {
          if (this.cards.find((card) => card.id == cardId).selected == false) {
            this.firstCard = this.cards.find((card) => card.id == cardId);
            this.firstCard.selected = true;
          }
        } else if (
          this.cards.find((card) => card.id == cardId).selected == false
        ) {
          if (this.firstCard != undefined && this.firstCard.id != cardId) {
            this.secondCard = this.cards.find((card) => card.id == cardId);
            this.secondCard.selected = true;
            this.wait = true;
          }
          if (this.firstCard.value == this.secondCard.value) {
            this.firstCard = null;
            this.secondCard = null;
            this.multiplier = this.multiplier + 1;
            this.wait = false;
            this.score =
              this.score +
              100 * (this.multiplier * this.multiplier) +
              this.score / 3;
            console.log(Math.floor(this.score));
          } else {
            setTimeout(() => {
              this.firstCard.selected = false;
              this.secondCard.selected = false;
              this.firstCard = null;
              this.secondCard = null;
              this.multiplier = 1;
              this.wait = false;
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
      let gameEnd;
      let isBelowThreshold = (currentValue) => currentValue.selected == true;
      if (this.cards.every(isBelowThreshold)) {
        gameEnd = true;
      } else {
        gameEnd = false;
      }
      return gameEnd;
    },
  },
  mounted() {
    this.genereteCardDeck(12);
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
