import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    ranking: [],
    status: null,
  },
  mutations: {
    SET_RANKING(state, ranking) {
      state.ranking = ranking;
    },
    SET_STATUS(state, status) {
      state.status = status;
    },
  },
  actions: {
    getRanking({ commit }) {
      commit("SET_STATUS", "PENDING");
      axios
        .get(
          "https://sheet.best/api/sheets/4c2c0466-7c0f-482e-ba44-c03c6459a4de"
        )
        .then((response) => {
          commit("SET_RANKING", response.data);
          commit("SET_STATUS", "RECIVED");
        })
        .catch(() => {
          commit("SET_STATUS", "ERROR");
        })
        .then(() => {
          commit("SET_STATUS", "");
        });
    },
    setNewScore({ commit }, data) {
      commit("SET_STATUS", "PENDING");
      axios
        .post(
          "https://sheet.best/api/sheets/4c2c0466-7c0f-482e-ba44-c03c6459a4de",
          {
            id: data.id,
            name: data.name,
            score: data.score,
          }
        )
        .then(() => {
          commit("SET_STATUS", "DATA PLACED");
        })
        .catch(() => {
          commit("SET_STATUS", "ERROR");
        });
    },
  },
});
