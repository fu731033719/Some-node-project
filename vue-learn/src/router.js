import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './pages/one.vue'
import pageB from './pages/two.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: pageA
  },
  {
    path: '/pageb',
    component: pageB
  },
]

const router = new VueRouter ({
  routes
})

export default router