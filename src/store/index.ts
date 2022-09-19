import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
  },
});
