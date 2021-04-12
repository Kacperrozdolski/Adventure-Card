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
  cursor: pointer;
}
</style>
