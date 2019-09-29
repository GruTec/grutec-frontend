import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ls from 'local-storage'
import { resolve, reject } from 'q';

Vue.use(Vuex)

const apiAuth = axios.create({
  baseURL: 'http://localhost:5000'
})

export default new Vuex.Store({
  state: {
    token: ls.get('token') || null
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = ''
    }
  },

  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        apiAuth.post('/auth', credentials)
          .then(response => {

          })
      })
    }
  }
})