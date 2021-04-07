<template>
  <img src="../assets/adventure-card.png" alt="" srcset="" @click="home" />
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
}
</style>
