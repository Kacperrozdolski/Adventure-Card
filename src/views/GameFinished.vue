<template>
  <BasicPopup>
    <h1>YOUR SCORE</h1>
    <div class="level-finished-score">
      <span @click="asd">{{ Math.floor(score) }}</span>
      <h2>Rank: {{ rank }}</h2>
    </div>
    <input
      type="text"
      v-model="userName"
      placeholder="Your name"
      @keyup.enter="setNewScore"
    />
    <div class="scoreboard-menu">
      <button v-if="!recived" @click="setNewScore">SAVE</button
      ><button v-if="recived" class="recived">SAVED</button>
      <button @click="playAgain">PLAY AGAIN</button
      ><button @click="redirectToMainMenu">MAIN MENU</button>
    </div>
  </BasicPopup>
</template>

<script>
import BasicPopup from "../components/BasicPopup";
export default {
  name: "GameFinished",
  props: ["score"],
  components: { BasicPopup },
  data() {
    return { array: [], recived: false, userName: "" };
  },
  computed: {
    rank() {
      return this.array.indexOf(this.score) + 1;
    },
  },
  mounted() {
    this.array.push(this.score);
    for (let i = 0; i < this.$store.state.ranking.length; i++) {
      this.array.push(this.$store.state.ranking[i].SCORE);
    }
    this.array.sort((a, b) => b - a);
  },
  methods: {
    setNewScore() {
      let id;
      if (this.$store.state.ranking.length == 0) {
        id = 0;
      } else {
        id = this.$store.state.ranking[this.$store.state.ranking.length - 1].id;
      }
      let data = {
        id: ++id,
        name: this.userName,
        score: Math.floor(this.score),
      };
      this.$store.dispatch("setNewScore", data);
      this.recived = true;
    },
    playAgain() {
      this.$router.go();
    },
    redirectToMainMenu() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.5rem;
  margin: 30px 0 10px 0;
  font-family: "Poppins";
}
.level-finished-score {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: center;
  align-items: center;

  span {
    width: 50%;
    text-align: center;
    font-size: 70px;
    font-family: "Teko";
  }
  h2 {
    width: 25%;
    text-align: left;
    font-family: "Poppins";
    font-weight: 200;
    font-size: 2rem;
    height: 50px;
  }
}
input {
  width: 80%;
  height: 10%;
  border: none;
  text-align: center;
  font-size: 2rem;
}
input:focus {
  border: none;
  outline: none;
}
.scoreboard-menu {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    width: 35%;
    cursor: pointer;
    outline: none;
    height: 15%;
    background: #fff;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    font-family: "Titillium Web";
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recived {
    width: 35%;
    cursor: pointer;
    outline: none;
    height: 15%;
    color: rgb(177, 177, 177);
    border: 1px solid rgb(177, 177, 177);
    border-radius: 10px;
    margin: 20px;
    font-family: "Titillium Web";
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
  }
}
</style>
