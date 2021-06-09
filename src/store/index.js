import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    someNumber: 1,
    movies: {},
    isLoading: false,
  },
  actions,
  mutations,
  getters,
});

export default store;
