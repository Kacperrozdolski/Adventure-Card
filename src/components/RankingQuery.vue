<template>
  <div class="ranking-query">
    <p class="position" :class="styling">{{ position }}</p>
    <p class="name" :class="styling">{{ name }}</p>
    <p class="score" :class="styling">{{ score }}</p>
  </div>
</template>

<script>
export default {
  name: "RankingQuery",
  props: ["position", "name", "score"],
  computed: {
    styling() {
      return this.position == 1
        ? "first"
        : this.position == 2
        ? "second"
        : this.position == 3
        ? "third"
        : "else";
    },
  },
};
</script>

<style lang="scss" scoped>
.ranking-query {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;
  p {
    margin: 10px 0;
  }
  .position {
    width: 20%;
  }
  .name {
    width: 60%;
  }
  .score {
    width: 25%;
  }
  .first {
    font-weight: 900;
    font-size: 2rem !important;
  }
  .second {
    font-weight: 500 !important ;
    font-size: 1.5rem !important;
  }
  .third {
    font-weight: 300 !important;
    font-size: 1.35rem !important;
  }
  .else {
    font-weight: 300 !important;
    font-size: 1.15rem !important;
  }
}
</style>
