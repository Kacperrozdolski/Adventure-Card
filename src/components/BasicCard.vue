<template>
  <div
    @click="flipCard"
    class="basic-card"
    :style="{ background: this.cardColor }"
    :id="id"
  >
    <img :src="this.url" />
  </div>
</template>
<script>
export default {
  name: "BasicCard",
  props: ["urlPath", "gameMode", "id"],
  computed: {
    url() {
      return require(`@/assets/${this.gameMode}/${this.urlPath}.png`);
    },
    cardColor() {
      let color;
      if (this.gameMode == "easy") {
        color = "#F9ECFE";
      }
      if (this.gameMode == "medium") {
        color = "#C3955C";
      }
      if (this.gameMode == "hard") {
        color = "#8F8F8F";
      }
      return color;
    },
  },
  methods: {
    flipCard($event) {
      if ($event.path[0].id == "") {
        document.getElementById($event.path[1].id).classList.add("flip");
      } else {
        document.getElementById($event.path[0].id).classList.add("flip");
      }
    },
  },
};
</script>
<style lang="scss">
.basic-card {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
    width: 80%;
  }
}
</style>
