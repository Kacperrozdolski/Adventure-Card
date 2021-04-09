<template>
  <div class="level-finished-container">
    <div class="level-finished-scoreboard">
      <img src="../assets/easy/brownCandy.png" class="brownCandy" />
      <img src="../assets/easy/chocoCandy.png" class="chocoCandy" />
      <img src="../assets/easy/donutCandy.png" class="donutCandy" />
      <img src="../assets/easy/strawCandy.png" class="strawCandy" />
      <h1>YOUR SCORE</h1>
      <div class="level-finished-score">
        <span>{{ Math.floor(score) }}</span>
        <h2>Rank: 8</h2>
      </div>
      <input type="text" placeholder="Your name" />
      <div class="scoreboard-menu">
        <button>SAVE</button><button>PLAY AGAIN</button
        ><button>MAIN MENU</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameFinished",
  props: ["score"],
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
    }
  }
}
</style>
