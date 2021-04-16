<template>
  <BasicPopup>
    <h1>RANKING</h1>
    <div class="ranking-container">
      <p v-if="$store.state.ranking.length == 0">No records set yet!.</p>
      <RankingQuery
        v-for="query in ranking"
        :key="query[0]"
        :position="ranking.indexOf(query) + 1"
        :name="query[1]"
        :score="query[2]"
      />
    </div>
    <button @click="backToMenu">MENU</button>
  </BasicPopup>
</template>

<script>
import BasicPopup from "../components/BasicPopup";
import RankingQuery from "../components/RankingQuery";
export default {
  name: "Ranking",
  components: { BasicPopup, RankingQuery },
  data() {
    return {
      ranking: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("getRanking");
  },
  mounted() {
    let array = this.$store.state.ranking;
    let number = this.$store.state.ranking.length + 1;
    for (let items in array) {
      this.ranking.push([
        --number,
        this.$store.state.ranking[items].name,
        this.$store.state.ranking[items].score,
      ]);
    }
    this.ranking.sort((a, b) => b[2] - a[2]);
  },
  methods: {
    backToMenu() {
      this.$emit("backToMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: fixed;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 60px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
h1 {
  font-family: "Poppins";
  font-weight: 900;
  font-size: 5rem;
  margin: 10px 0;
}
.ranking-container {
  height: 65%;
  width: 100%;
  font-family: "Poppins";
  border-right: 5px;
  overflow-y: scroll;
}
button {
  width: 35%;
  cursor: pointer;
  outline: none;
  height: 40px;
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  font-family: "Titillium Web";
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 660px) {
  .level-container {
    nav {
      display: flex;
      flex-direction: column;
      .logo {
        height: 30vw;
        width: auto;
      }
      .score {
        display: none;
      }
    }
  }
  .level-container__cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 400px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
