<template>
  <BasicPopup>
    <h1>YOUR SCORE</h1>
    <div class="level-finished-score">
      <span>{{ Math.floor(score) }}</span>
      <h2>Rank: {{ rank }}</h2>
    </div>
    <input
      type="text"
      v-model="userName"
      placeholder="Your name"
      maxlength="18"
      :class="this.error ? 'error' : ''"
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
    return {
      array: [],
      recived: false,
      userName: "",
      error: false,
      wait: false,
    };
  },
  computed: {
    rank() {
      return this.array.indexOf(this.score) + 1;
    },
  },
  mounted() {
    this.array.push(this.score);
    for (let i = 0; i < this.$store.state.ranking.length; i++) {
      this.array.push(this.$store.state.ranking[i].score);
    }
    this.array.sort((a, b) => b - a);
    window.scrollTo({ top: 10 + "%", behavior: "smooth" });
  },
  methods: {
    setNewScore() {
      if (this.userName != "") {
        let id;
        if (this.$store.state.ranking.length == 0) {
          id = 0;
        } else {
          id = this.$store.state.ranking[this.$store.state.ranking.length - 1]
            .id;
        }
        let data = {
          id: ++id,
          name: this.userName,
          score: Math.floor(this.score),
        };
        this.$store.dispatch("setNewScore", data);
        this.recived = true;
      } else {
        this.error = true;
      }
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

<style lang="scss">
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
  overflow: hidden;

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
.error {
  animation: 1s wiggle;
}
@keyframes wiggle {
  0% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.scoreboard-menu {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    width: 150px;
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
    width: 150px;
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
@media only screen and (max-width: 400px) {
  h1 {
    font-size: 2rem;
  }
  .level-finished-score {
    h2 {
      font-size: 1rem;
    }
    span {
      font-size: 3rem;
    }
  }
}
</style>
