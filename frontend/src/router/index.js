import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import projectApp from '../views/projectApp.vue'
import projectDetails from '../components/project-details.vue'
import About from '../views/About.vue'
import contect from '../components/contect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectApp
  },
  {
    path: '/projects/:projectId',
    name: 'project-details',
    component: projectDetails
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/  contect',
    name: '  contect',
    component:   contect
  },

  // {
  //   path: '/About',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
