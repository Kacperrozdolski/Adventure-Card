<template>
  <div class="easy-body">
    <MiniLogo />
    <div class="card-container">
      <component v-for="card in cards" :key="card.id" :is="'BasicCard'">{{
        `Karta: ${card.value}`
      }}</component>
    </div>
    <BasicFooter :icons="false" />
  </div>
</template>

<script>
import MiniLogo from "../components/MiniLogo.vue";
import BasicCard from "../components/BasicCard.vue";
import BasicFooter from "../components/BasicFooter.vue";
export default {
  name: "EasyMode",
  components: { BasicCard, MiniLogo, BasicFooter },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    genereteCardDeck(num) {
      for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
          this.cards.push({
            id: i,
            value: "catDead",
          });
        }
        if (i == 2 || i == 3) {
          this.cards.push({
            id: i,
            value: "cyclopDead",
          });
        }
        if (i == 4 || i == 5) {
          this.cards.push({
            id: i,
            value: "flyingDead",
          });
        }
        if (i == 6 || i == 7) {
          this.cards.push({
            id: i,
            value: "grassDead",
          });
        }
        if (i == 8 || i == 9) {
          this.cards.push({
            id: i,
            value: "hagDead",
          });
        }
        if (i == 10 || i == 11) {
          this.cards.push({
            id: i,
            value: "skeletonDead",
          });
        }
        if (i == 12 || i == 13) {
          this.cards.push({
            id: i,
            value: "vampireDead",
          });
        }
        if (i == 14 || i == 15) {
          this.cards.push({
            id: i,
            value: "wizardDead",
          });
        }
        if (i == 16 || i == 17) {
          this.cards.push({
            id: i,
            value: "yellowDead",
          });
        }
        this.shuffleArray(this.cards);
      }
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      console.log(this.cards);
    },
  },
  mounted() {
    this.genereteCardDeck(18);
  },
};
</script>

<style lang="scss" scoped>
.easy-body {
  height: 110vh;
  width: 100%;
  background-image: url("../assets/background/hard_background.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .card-container {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
    grid-template-rows: 180px 180px 180px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
