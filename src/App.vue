<template>
  <router-view />
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("getRanking");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap");
body {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
