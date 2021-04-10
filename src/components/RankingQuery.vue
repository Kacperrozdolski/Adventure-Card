<template>
  <div class="ranking-query">
    <p>{{ position }}</p>
    <p>{{ name }}</p>
    <p>{{ score }}</p>
  </div>
</template>

<script>
export default {
  name: "RankingQuery",
  props: ["position", "name", "score"],
};
</script>

<style lang="scss" scoped>
.ranking-query {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
}
p {
  margin: 0;
}
</style>
