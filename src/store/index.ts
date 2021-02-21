import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reports: []
  },
  mutations: {
    setReports: (state, reports) => {
      state.reports = reports;
    }
  },
  actions: {},
  modules: {}
});
