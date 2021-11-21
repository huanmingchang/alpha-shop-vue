import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
})

export default router
