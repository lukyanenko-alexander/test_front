import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";
import category from "./category";
import error from "./errors";
import popUp from "./popUp";
import post from "./post";
import rate from "./rate";
import user from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, category, post, user, error, popUp, rate
  }
})
