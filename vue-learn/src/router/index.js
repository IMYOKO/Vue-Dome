import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import registed from '@/components/registed/registed'
import componentsVue from '@/components/Login/component'
import other from '@/components/other/other'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/componentsVue', name: 'componentsVue', component: componentsVue },
    { path: '/registed', name: 'registed', component: registed },
    { path: '/other', name: 'other', component: other },
  ]
})
