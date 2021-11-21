import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout',
  },
  {
    path: '/checkout',
    name: 'cart',
    component: Checkout,
  },
  // {
  //   path: '/checkout/:step',
  //   name: 'cart',
  //   component: Checkout,
  // },
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
