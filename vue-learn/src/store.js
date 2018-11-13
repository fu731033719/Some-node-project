import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations =  {
  increment(state) {
    state.count++
  },
  decrement (state) {
    if (state.count <= 0) {
      state.count === 0
    }
    state.count--
  },
  anotherOperation (state) {
    state.count += 2
  }
}

const actions = {
  increment: ({ commit }) => {
    commit('increment')
  },
  decrement: ({ commit }) => {
    commit('decrement')
  },
  asswecan : ({ commit }) => {
    commit('anotherOperation')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})