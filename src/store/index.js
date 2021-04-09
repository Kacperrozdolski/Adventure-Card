import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    ranking: [],
    status: "",
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
          "https://sheet.best/api/sheets/b7758196-b157-450f-9af7-83f0427165c8"
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
          "https://sheet.best/api/sheets/b7758196-b157-450f-9af7-83f0427165c8",
          {
            ID: data.id,
            NAME: data.name,
            SCORE: data.score,
          }
        )
        .then(() => {
          commit("SET_STATUS", "DATA PLACED");
        })
        .catch(() => {
          commit("SET_STATUS", "ERROR");
        })
        .then(() => {
          commit("SET_STATUS", "");
        });
    },
  },
});
