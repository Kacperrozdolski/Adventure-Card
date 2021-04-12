<template>
  <div class="level-finished-container">
    <div class="level-finished-scoreboard">
      <img src="../assets/easy/brownCandy.png" class="brownCandy" />
      <img src="../assets/easy/chocoCandy.png" class="chocoCandy" />
      <img src="../assets/easy/donutCandy.png" class="donutCandy" />
      <img src="../assets/easy/strawCandy.png" class="strawCandy" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicPopup",
};
</script>

<style lang="scss" scoped>
.level-finished-container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;

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
  }
}
@media only screen and (max-width: 400px) {
  .level-finished-scoreboard {
    width: 100%;
    height: 80vh !important;
  }
}
</style>
