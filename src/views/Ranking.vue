<template>
  <BasicPopup>
    <h1>RANKING</h1>
    <div @click="asd" class="ranking-container"></div>
    <button>asdas</button>
  </BasicPopup>
</template>

<script>
import BasicPopup from "../components/BasicPopup";
export default {
  name: "Ranking",
  components: { BasicPopup },
  data() {
    return {
      ranking: [],
    };
  },
  methods: {
    asd() {
      console.log(this.$store.state.ranking);
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 60px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
h1 {
  font-family: "Poppins";
  font-weight: 900;
  font-size: 5rem;
  margin: 10px 0;
}
.ranking-container {
  height: 65%;
  width: 90%;
  margin-bottom: auto;
  font-family: "Poppins";
  overflow-y: scroll;
}
button {
  margin-bottom: auto;
}
</style>
