import Vue from 'vue'
import Vuex from 'vuex'
import moneyModules from './modules/one'
import countModules from './modules/two'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moneyModules,
    countModules
  }
})