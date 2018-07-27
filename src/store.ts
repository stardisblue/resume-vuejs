import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: null,
  },
  mutations: {
    setResume(state, obj) {
      state.resume = obj
    },
  },
  actions: {

  },
})
