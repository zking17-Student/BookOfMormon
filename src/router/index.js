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
    path: '/Alma-Amulek',
    name: 'Alma-Amulek',
    component: () => import( '../views/Alma-Amulek.vue')
  },
  //Start Teancum
  {
    path: '/Teancum',
    name: 'Teancum',
    component: () => import( '../views/Teancum.vue')
  },
  {
    path: '/Kneel',
    name: 'Kneel',
    component: () => import( '../views/Kneel.vue')
  },
  {
    path: '/Sneak',
    name: 'Sneak',
    component: () => import( '../views/Sneak.vue')
  },
  {
    path: '/Sneak2',
    name: 'Sneak2',
    component: () => import( '../views/Sneak2.vue')
  },
  {
    path: '/Kill',
    name: 'Kill',
    component: () => import( '../views/Kill.vue')
  },
  //Start Real-Teancum
  {
    path: '/Real-Teancum',
    name: 'Real-Teancum',
    component: () => import( '../views/Real-Teancum.vue')
  },
  {
    path: '/Kneel2',
    name: 'Kneel2',
    component: () => import( '../views/Kneel2.vue')
  },
  {
    path: '/Insta',
    name: 'Insta',
    component: () => import( '../views/Insta.vue')
  },
  {
    path: '/Dirt',
    name: 'Dirt',
    component: () => import( '../views/Dirt.vue')
  },
  {
    path: '/Mean',
    name: 'Mean',
    component: () => import( '../views/Mean.vue')
  },
  //Start Alma-Amulek
  {
    path: '/Return',
    name: 'Return',
    component: () => import( '../views/Return.vue')
  },
  {
    path: '/Leave',
    name: 'Leave',
    component: () => import( '../views/Leave.vue')
  },
  {
    path: '/Continue-Leave',
    name: 'Continue-Leave',
    component: () => import( '../views/Continue-Leave.vue')
  }, 
  {
    path: '/Real-Alma',
    name: 'Real-Alma',
    component: () => import( '../views/Real-Alma.vue')
  },
  {
    path: '/Stay',
    name: 'Stay',
    component: () => import( '../views/Stay.vue')
  },
  {
    path: '/Alone',
    name: 'Alone',
    component: () => import( '../views/Alone.vue')
  },
  {
    path: '/Invite',
    name: 'Invite',
    component: () => import( '../views/Invite.vue')
  },
  //Start Real-Alma
  {
    path: '/Start-Clean',
    name: 'Start-Clean',
    component: () => import( '../views/Start-Clean.vue')
  },
  {
    path: '/Convince',
    name: 'Convince',
    component: () => import( '../views/Convince.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import( '../views/Help.vue')
  },
  {
    path: '/Sneak3',
    name: 'Sneak3',
    component: () => import( '../views/Sneak3.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
