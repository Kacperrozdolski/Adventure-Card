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
import MiniLogo from "../components/MiniLogo.vue";
import BasicCard from "../components/BasicCard.vue";
export default {
  name: "EasyMode",
  components: { BasicCard, MiniLogo },
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
        if (i == 12 || i == 13) {
          this.cards.push({
            id: i,
            value: "Miętusek",
          });
        }
        if (i == 14 || i == 15) {
          this.cards.push({
            id: i,
            value: "Miętusek",
          });
        }
        if (i == 16 || i == 17) {
          this.cards.push({
            id: i,
            value: "Miętusek",
          });
        }
        if (i == 18 || i == 19) {
          this.cards.push({
            id: i,
            value: "Miętusek",
          });
        }
        if (i == 20 || i == 21) {
          this.cards.push({
            id: i,
            value: "Miętusek",
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
  height: 100vh;
  width: 100%;
  background-image: url("../assets/hard_background.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-container {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
    grid-template-rows: 180px 180px 180px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
