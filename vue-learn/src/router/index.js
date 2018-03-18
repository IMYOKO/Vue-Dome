import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import registed from '@/components/registed/registed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/registed', name: 'registed', component: registed }
  ]
})
