// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './providers/http-service'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import App from './App'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  store,
  router,
  components: { App },
  template: '<App/>'
})
