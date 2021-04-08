<template>
  <div class="footer-container">
    <p>copyright © 2021 kacper rozdolski. all rights reserved.</p>
    <div class="footer-wrapper" v-if="icons">
      <a href="mailto:leopoldsinx@gmail.com"
        ><img src="@/assets/icons/mail.svg"
      /></a>
      <a
        href="https://www.linkedin.com/in/kacper-rozdolski-ba6a4715b/"
        target="_blank"
        ><img src="@/assets/icons/linkedin.svg"
      /></a>
      <a href="https://github.com/Kacperrozdolski" target="_blank"
        ><img src="@/assets/icons/github.svg"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "BasicFooter",
  props: ["icons"],
};
</script>
<style lang="scss" scoped>
.footer-container {
  max-height: 200px;
  width: 100%;
  color: #e7d9ea;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-end !important;
  img {
    margin: 10px;
  }
  > p {
    text-align: center;
  }
}
</style>
