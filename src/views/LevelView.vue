<template>
  <GenericLevel :levelSettings="levelSettings" />
</template>

<script>
import GenericLevel from "../views/GenericLevel.vue";
import { levelSettings } from "../utils/gameConfig";
export default {
  name: "LevelView",
  components: { GenericLevel },
  props: ["level"],
  computed: {
    levelSettings() {
      return levelSettings[this.level];
    },
  },
};
</script>
