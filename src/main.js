import Vue from 'vue'
import App from './App.vue'
import './plugins';
import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "./drizzleOptions"
import store from './store/index';

Vue.config.productionTip = false

Vue.use(drizzleVuePlugin, { store, drizzleOptions })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
