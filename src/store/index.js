import Vue from 'vue'
import Vuex from 'vuex'
import zombie from './zombie';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    zombie
  }
})
