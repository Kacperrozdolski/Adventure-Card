<template>
  <div class="adventure-body">
    <img src="../assets/background/adventure-card.png" class="logo" />
    <div class="menu">
      <div class="menu-button play" @click="redirectToGame"><p>PLAY</p></div>
      <div class="menu-button">
        <img
          src="../assets/icons/arrow.svg"
          class="left"
          @click="changeLevel('back')"
        />
        <p>{{ level.name.toUpperCase() }}</p>
        <img
          src="../assets/icons/arrow.svg"
          class="right"
          @click="changeLevel('forward')"
        />
      </div>
      <div class="menu-button"><p>RANKING</p></div>
    </div>
    <BasicFooter :icons="true" />
  </div>
</template>

<script>
import BasicFooter from "../components/BasicFooter.vue";
import { levels } from "../utils/gameConfig";

export default {
  name: "Home",
  data() {
    return {
      currentLevel: 0,
      level: {
        name: "easy",
        numberOfCards: 12,
      },
    };
  },
  components: { BasicFooter },
  methods: {
    redirectToGame() {
      this.$router.push(`/game?level=${this.level.name}`);
    },
    changeLevel(direction) {
      direction == "forward" ? this.currentLevel++ : this.currentLevel--;
      this.level = levels[this.currentLevel];

      if (this.currentLevel < 0) {
        this.currentLevel = levels.length;
        this.level = levels[levels.length - 1];
      }
      if (this.currentLevel > levels.length) {
        this.currentLevel = 0;
        this.level = levels[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.adventure-body {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/background/menu_background.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    height: 40%;
  }
  .menu {
    height: 70%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .menu-button {
      width: 35%;
      height: 14%;
      background: #fff;
      border: 1px solid black;
      border-radius: 10px;
      margin: 20px;
      font-family: "Titillium Web";
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-weight: 400;
        font-size: 1.25rem;
        margin: 0px 10px;
        padding: 0;
        width: 30%;
        text-align: center;
      }
      img {
        cursor: pointer;
      }
      .right {
        transform: rotate(180deg);
      }
    }
    .play {
      cursor: pointer;
    }
  }
}
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&display=swap");
</style>
