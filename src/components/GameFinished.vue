<template>
  <div class="level-finished-container">
    <div class="level-finished-scoreboard">
      <img src="../assets/easy/brownCandy.png" class="brownCandy" />
      <img src="../assets/easy/chocoCandy.png" class="chocoCandy" />
      <img src="../assets/easy/donutCandy.png" class="donutCandy" />
      <img src="../assets/easy/strawCandy.png" class="strawCandy" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "GameFinished",
  props: ["score"],
  data() {
    return { array: [], recived: false };
  },
  computed: {
    rank() {
      return this.array.indexOf(this.score) + 1;
    },
  },
  mounted() {
    this.$store.dispatch("getRanking");
    this.array.push(this.score);
    for (let i = 0; i < this.$store.state.ranking.length; i++) {
      this.array.push(this.$store.state.ranking[i].SCORE);
    }
    this.array.sort((a, b) => b - a);
  },
  methods: {
    setNewScore() {
      console.log(this.$store.state.ranking.length);
      let id = this.$store.state.ranking[this.$store.state.ranking.length - 1]
        .ID;
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
.level-finished-container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  .level-finished-scoreboard {
    min-width: 40%;
    height: 80%;
    background: white;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    border: 3px solid black;
    .chocoCandy {
      right: -100px;
      bottom: 0;
      transform: rotate(45deg);
    }
    .strawCandy {
      left: -100px;
      top: -20px;
      transform: rotate(-40deg);
    }
    .donutCandy {
      top: -20px;
      right: -150px;
      transform: rotate(45deg);
    }
    .brownCandy {
      bottom: 20px;
      left: -160px;
      transform: rotate(-40deg);
    }
    img {
      height: 350px;
      position: absolute;
      z-index: -1 !important;
    }
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
      button:hover {
        background: rgb(221, 221, 221);
      }
      .recived {
        width: 35%;
        cursor: pointer;
        outline: none;
        height: 15%;
        border: 1px solid black;
        border-radius: 10px;
        margin: 20px;
        font-family: "Titillium Web";
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
      }
    }
  }
}
</style>
