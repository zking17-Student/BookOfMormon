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
    component: () => import('../views/Gadianton.vue')
  },
  {
    path: '/views-Alma/Alma-Amulek',
    name: 'Alma-Amulek',
    component: () => import( '../views/views-Alma/Alma-Amulek.vue')
  },
  {
    path: '/Teancum',
    name: 'Teancum',
    component: () => import( '../views/Teancum.vue')
  },
  {
    path: '/views-Teancum/Kneel',
    name: 'Kneel',
    component: () => import( '../views/views-Teancum/Kneel.vue')
  },
  {
    path: '/views-Teancum/Sneak',
    name: 'Sneak',
    component: () => import( '../views/views-Teancum/Sneak.vue')
  },
  {
    path: '/views-Teancum/Sneak2',
    name: 'Sneak2',
    component: () => import( '../views/views-Teancum/Sneak2.vue')
  },
  {
    path: '/views-Teancum/Kill',
    name: 'Kill',
    component: () => import( '../views/views-Teancum/Kill.vue')
  },
  {
    path: '/views-Teancum/Real-Teancum',
    name: 'Real-Teancum',
    component: () => import( '../views/views-Teancum/Real-Teancum.vue')
  },
  {
    path: '/views-Teancum/Kneel2',
    name: 'Kneel2',
    component: () => import( '../views/views-Teancum/Kneel2.vue')
  },
  {
    path: '/views-Teancum/Insta',
    name: 'Insta',
    component: () => import( '../views/views-Teancum/Insta.vue')
  },
  {
    path: '/views-Teancum/Dirt',
    name: 'Dirt',
    component: () => import( '../views/views-Teancum/Dirt.vue')
  },
  {
    path: '/views-Teancum/Mean',
    name: 'Mean',
    component: () => import( '../views/views-Teancum/Mean.vue')
  },
  {
    path: '/views-Alma/Return',
    name: 'Return',
    component: () => import( '../views/views-Alma/Return.vue')
  },
  {
    path: '/views-Alma/Leave',
    name: 'Leave',
    component: () => import( '../views/views-Alma/Leave.vue')
  },
  {
    path: '/views-Alma/Continue-Leave',
    name: 'Continue-Leave',
    component: () => import( '../views/views-Alma/Continue-Leave.vue')
  },
  {
    path: '/views-Alma/Stay',
    name: 'Stay',
    component: () => import( '../views/views-Alma/Stay.vue')
  },
  {
    path: '/views-Alma/Alone',
    name: 'Alone',
    component: () => import( '../views/views-Alma/Alone.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
