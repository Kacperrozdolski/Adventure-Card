<template>
  <div class="basic-card" :id="card.id">
    <vue-flip width="180px" height="180px" v-model="selectedHandler">
      <template v-slot:front>
        <div class="card" :style="{ background: this.levelSettings.color }">
          <img :src="this.cardImageUrl" />
        </div>
      </template>
      <template v-slot:back class="back easy">
        <div class="card" :style="{ background: this.levelSettings.color }">
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
  props: ["card", "levelSettings"],
  computed: {
    selectedHandler() {
      return this.card.selected;
    },
    url() {
      return require(`@/assets/${this.levelSettings.name}/${this.card.value}.png`);
    },
    cardImageUrl() {
      return require(`@/assets/${this.levelSettings.name}/${this.levelSettings.name}Front.png`);
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
