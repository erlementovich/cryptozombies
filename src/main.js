import Vue from 'vue'
import App from './App.vue'
import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "./drizzleOptions"
import store from './store'

Vue.config.productionTip = false

Vue.use(drizzleVuePlugin, { store, drizzleOptions })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
