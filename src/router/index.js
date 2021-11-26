import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckOut from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout/1',
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut,
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../components/FormOne.vue'),
      },
      {
        path: '2',
        name: '2',
        component: () => import('../components/FormTwo.vue'),
      },
      {
        path: '3',
        name: '3',
        component: () => import('../components/FormThree.vue'),
      },
    ],
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
