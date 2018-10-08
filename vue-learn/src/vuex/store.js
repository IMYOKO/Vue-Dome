import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GET_LOGIN_STATE = 'GET_LOGIN_STATE';

const state = {
  loginStatus: sessionStorage.getItem('token') || false,
  open: false,
  email: '',
  number: 0,
  dtype: false,
  dtype2: false,
}

const getters = {
  numbers: state => Number(state.number) + 10
}

const mutations = {
  [GET_LOGIN_STATE](state) {
    // sessionStorage.setItem('token', 'wangyu');
    const token = sessionStorage.getItem('token');
    console.log('123'+state.loginStatus)
    token == null ? state.loginStatus = false : state.loginStatus = true;
    console.log('这里是vuex方法')
  },
  updataEmail (state, opt) {
    state.email = opt;
  },
  updataNumber (state, opt) {
    state.number = opt;
  },
  getOpen(state) {
    console.log('123');
    return state.open;
  },
  setType(state, type) {
    state[type.name] = !state[type.name];
    console.log(type.id)
  }
}

const actions = {
  getLogin({commit}) {
    commit(GET_LOGIN_STATE)
    commit('getOpen')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})