<template>
  <div class="easy-body">
    <MiniLogo />
    <div class="card-container">
      <component
        v-for="card in cards"
        :urlPath="card.value"
        :gameMode="'easy'"
        :id="card.id"
        :key="card.id"
        :is="'BasicCard'"
        @click="selected(card.value, card.id)"
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
      firstSelected: null,
      firstSelectedId: null,
    };
  },
  methods: {
    genereteCardDeck(num) {
      for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
          this.cards.push({
            id: i,
            value: "brownCandy",
          });
        }
        if (i == 2 || i == 3) {
          this.cards.push({
            id: i,
            value: "chocoCandy",
          });
        }
        if (i == 4 || i == 5) {
          this.cards.push({
            id: i,
            value: "donutCandy",
          });
        }
        if (i == 6 || i == 7) {
          this.cards.push({
            id: i,
            value: "greenCandy",
          });
        }
        if (i == 8 || i == 9) {
          this.cards.push({
            id: i,
            value: "pinkCandy",
          });
        }
        if (i == 10 || i == 11) {
          this.cards.push({
            id: i,
            value: "strawCandy",
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
    selected(selectedCard, cardId) {
      if (this.firstSelected == null) {
        this.firstSelected = selectedCard;
        this.firstSelectedId = cardId;
      } else {
        if (this.firstSelectedId != cardId) {
          if (this.firstSelected == selectedCard) {
            console.log(
              "to jest para, zostaw karty o id" +
                this.firstSelectedId +
                " " +
                cardId
            );
            this.firstSelected = null;
            this.firstSelectedId = null;
          } else {
            console.log("to nie para, zakryj karty");
            this.firstSelected = null;
            this.firstSelectedId = null;
          }
        }
      }
    },
  },
  mounted() {
    this.genereteCardDeck(12);
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
  .card-container {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px;
    grid-template-rows: 180px 180px 180px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
