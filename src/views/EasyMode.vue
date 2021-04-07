<template>
  <div class="easy-body">
    <MiniLogo />
    <div class="card-container">
      <component v-for="card in cards" :key="card.id" :is="'BasicCard'">{{
        `Karta: ${card.value}`
      }}</component>
    </div>
  </div>
</template>

<script>
import BasicCard from "../components/BasicCard.vue";
import MiniLogo from "../components/MiniLogo.vue";
export default {
  name: "EasyMode",
  components: { BasicCard, MiniLogo },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    genereteCardDeck(mode) {
      if (mode == "easy") {
        for (let i = 0; i < 12; i++) {
          if (i == 0 || i == 1) {
            this.cards.push({
              id: i,
              value: "Piegusek",
            });
          }
          if (i == 2 || i == 3) {
            this.cards.push({
              id: i,
              value: "Landrynka",
            });
          }
          if (i == 4 || i == 5) {
            this.cards.push({
              id: i,
              value: "Rożek",
            });
          }
          if (i == 6 || i == 7) {
            this.cards.push({
              id: i,
              value: "Karmelek",
            });
          }
          if (i == 8 || i == 9) {
            this.cards.push({
              id: i,
              value: "Czekolad",
            });
          }
          if (i == 10 || i == 11) {
            this.cards.push({
              id: i,
              value: "Miętusek",
            });
          }
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
    this.cards = [];
    this.genereteCardDeck("easy");
  },
};
</script>

<style lang="scss" scoped>
.easy-body {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("../assets/easy_background.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-container {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px;
    grid-template-rows: 180px 180px 180px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
