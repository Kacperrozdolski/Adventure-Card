<template>
  <div class="basic-card" :id="id">
    <vue-flip width="180px" height="180px" v-model="selectedHandler">
      <template v-slot:front>
        <div class="card" :style="{ background: this.cardColor }">
          <img src="@/assets/easy/easyFront.png" />
        </div>
      </template>
      <template v-slot:back class="back easy">
        <div class="card" :style="{ background: this.cardColor }">
          <img :src="this.url" />
        </div>
      </template>
    </vue-flip>
  </div>
</template>
<script>
import VueFlip from "vue-flip";
export default {
  name: "BasicCard",
  components: { VueFlip },
  props: ["urlPath", "gameMode", "id", "selected"],
  computed: {
    selectedHandler() {
      let handler;
      if (this.selected == true) {
        handler = true;
      } else if (this.selected == false) {
        handler = false;
      }
      return handler;
    },
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
};
</script>
<style lang="scss">
.basic-card {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 80%;
    width: 80%;
  }
  .card {
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9ecfe;
  }
}
</style>
