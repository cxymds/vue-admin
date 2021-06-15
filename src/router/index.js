import { createRouter, createWebHistory } from 'vue-router'
import home from '../router/home/home'


const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/login'
    //component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/login/index')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  ...home
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
