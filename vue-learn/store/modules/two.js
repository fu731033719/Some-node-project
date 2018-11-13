const state = {
  count: 2
}

const mutations = {
  add (state, param) {
    state.count += param
  },
  readuce (state) {
    state.count --
  }
}

const actions = {
  add: ({commit}, param) => {
    commit('add', param)
  },
  readuce: ({commit}) => {
    commit('readuce')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}