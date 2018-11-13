const state = {
  money: 1
}

const mutations = {
  add (state) {
    state.money ++
  },
  readuce (state) {
    state.money --
  }
}

const actions = {
  add: ({commit}) => {
    commit('add')
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