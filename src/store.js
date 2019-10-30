import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ls from 'local-storage'
import jwt_decode from 'jwt-decode';

Vue.use(Vuex)

const apiAuth = axios.create({
  baseURL: 'http://localhost:5000'
})

export default new Vuex.Store({
  state: {
    token: ls.get('token') || null,
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

      let auth = {
        username: credentials.user,
        password: credentials.password
      }

      return new Promise((resolve, reject) => {
        apiAuth.post('/auth', {}, {auth})
          .then(response => {
            const token = response.data.token
            
            let decoded = jwt_decode(token)

            ls.set('username', decoded.username)
            ls.set('token', token)
            context.commit('setToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    registerUser(context, user) {
      return new Promise((resolve, reject) => {
        apiAuth.post('/v1/users', user)
          .then(response => {
            context.commit('setCurrentUser', userStoraged)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },

    destroyToken(context) {
      if (context.getters.loggedIn) {
        ls.remove('token')
        context.commit('destroyToken')
      }
    }
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  }
})