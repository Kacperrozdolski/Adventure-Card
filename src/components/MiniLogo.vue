<template>
  <img src="../assets/background/adventure-card.png" @click="home" />
</template>

<script>
export default {
  name: "MiniLogo",
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 12%;
  cursor: pointer;
}
</style>
