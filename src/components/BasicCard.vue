<template>
  <div class="basic-card">
    <img :src="this.url" />
  </div>
</template>
<script>
export default {
  name: "BasicCard",
  props: ["urlPath", "gameMode"],
  computed: {
    url() {
      return require(`@/assets/${this.gameMode}/${this.urlPath}.png`);
    },
  },
};
</script>
<style lang="scss">
.basic-card {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
    width: 80%;
  }
}
</style>
