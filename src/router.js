import Vue from 'vue'
import Router from 'vue-router'
import ls from 'local-storage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'localhost:8080',
  routes: [
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('./features/authentication/Authentication.vue'),
      meta: {
        plainLayout: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./features/dashboard/Dashboard.vue'),
      meta: {
        plainLayout: false,
        requiresAuth: true
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
// })