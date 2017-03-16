import Vue from 'vue'
import Vuex from 'vuex'
import {generateVuexStoreModuleConfiguration} from 'vuex-module-configuration-composer'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const context = require.context('./modules', true, /index\.js$/)

const storeConfiguration = Object.assign({
  getters,
  mutations,
  actions,
  state
}, generateVuexStoreModuleConfiguration(context))

export default new Vuex.Store(storeConfiguration)
