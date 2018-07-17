import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Login from '@/components/page/Login'
import Home from '@/components/page/Home'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

if (window.localStorage.getItem('token')) {
  store.commit('setAccessToken', window.localStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
export default router
