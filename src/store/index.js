import Vue from "vue";
import Vuex from "vuex";
import langs from "../lang";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_lang: "turkish",
    langs,
  },
  getters: {
    getLang: (state) => {
      return (text) => {
        return state.langs[state.app_lang][text];
      };
    },
  },
  mutations: {
    changeLang(state, lang) {
      state.app_lang = lang;
    },
  },
  actions: {},
  modules: {},
});
