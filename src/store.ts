import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_RESUME = 'setResume'

export default new Vuex.Store({
  state: {
    resume: null,
  },
  mutations: {
    [SET_RESUME](state, obj) {
      state.resume = obj
    },
  },
  actions: {

  },
})
