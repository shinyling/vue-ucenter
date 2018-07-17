import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: null,
    author: 'shiny',
    access_token: null
  },
  mutations: {
    setLogin (state, name) {
      state.login = name
    },
    setAccessToken (state, token) {
      localStorage.setItem('access_token', token)
      state.access_token = token
    },
    logout (state) {
      localStorage.removeItem('access_token')
      state.access_token = null
      state.login = null
    }
  },
  actions: {
    doLogin (data) {
      axios({
        method: 'post',
        url: '/api/user/login',
        data
      })
    }
  }
})
