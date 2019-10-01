import Vue from 'vue'
import Router from 'vue-router'
import ls from 'local-storage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
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
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = ls.get('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      next()
    } else {
      next({ name: 'authentication'})
    }
  } else {
    if (token) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
})

router.beforeEach((to, from, next) => {
  const token = ls.get('token')
  if (to.matched.some(record => record.meta.redirect)) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router