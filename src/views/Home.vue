<template>
  <div class="adventure-body">
    <img src="../assets/background/adventure-card.png" alt="" class="logo" />
    <div class="menu">
      <div class="menu-button play" @click="play('back')"><p>PLAY</p></div>
      <div class="menu-button">
        <img
          src="../assets/icons/arrow.svg"
          class="left"
          @click="changeMode('back')"
        />
        <p>{{ mode }}</p>
        <img
          src="../assets/icons/arrow.svg"
          class="right"
          @click="changeMode('forward')"
        />
      </div>
      <div class="menu-button"><p>RANKING</p></div>
    </div>
    <BasicFooter :icons="true" />
  </div>
</template>

<script>
import BasicFooter from "../components/BasicFooter.vue";
export default {
  name: "Home",
  data() {
    return { modeHandler: 1 };
  },
  components: { BasicFooter },
  methods: {
    play() {
      this.$router.push("/" + this.mode.toLowerCase());
    },
    changeMode(changeHandler) {
      if (changeHandler == "forward") {
        this.modeHandler++;
      }
      if (changeHandler == "back") {
        this.modeHandler--;
      }
      if (this.modeHandler == 0) {
        this.modeHandler = 3;
      }
      if (this.modeHandler == 4) {
        this.modeHandler = 1;
      }
    },
  },
  computed: {
    mode() {
      let mode;
      if (this.modeHandler == 1) {
        mode = "EASY";
      }
      if (this.modeHandler == 2) {
        mode = "MEDIUM";
      }
      if (this.modeHandler == 3) {
        mode = "HARD";
      }
      return mode;
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
