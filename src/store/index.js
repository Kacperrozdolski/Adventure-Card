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
          "https://sheet.best/api/sheets/0c3844a4-f7a5-4e9d-9af3-61bd29b2868f"
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
          "https://sheet.best/api/sheets/0c3844a4-f7a5-4e9d-9af3-61bd29b2868f",
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
