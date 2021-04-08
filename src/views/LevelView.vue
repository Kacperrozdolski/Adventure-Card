<template>
  <GenericLevel
    :deck="this.deck"
    :numberOfCards="numberOfCards"
    :level="level"
  />
</template>

<script>
import GenericLevel from "../views/GenericLevel.vue";
import {
  easyLevelIcons as easy,
  mediumLevelIcons as medium,
  hardLevelIcons as hard,
} from "../utils/gameConfig";
export default {
  name: "LevelView",
  components: { GenericLevel },
  props: ["level", "numberOfCards"],
  computed: {
    deck() {
      return this.level == "easy"
        ? easy
        : this.level == "medium"
        ? medium
        : hard;
    },
  },
};
</script>
