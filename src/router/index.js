import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Gadianton',
    name: 'Gadianton',
    component: () => import('../views/HWhelp.vue')
  },
  {
    path: '/Alma-Amulek',
    name: 'Alma-Amulek',
    component: () => import( '../views/Browse.vue')
  },
  {
    path: '/Teancum',
    name: 'Teancum',
    component: () => import( '../views/Browse.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
