import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import('@/components/v-catalog.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/components/v-cart.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
