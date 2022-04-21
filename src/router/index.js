import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      
        {
          path: '/jumin',
          name: 'jumin',
          component: () => import( '../views/jumin.vue')
        },
        {
          path: '/index',
          name: 'index',
          component: () => import( '../views/index.vue')
        },
        {
          path: '/xiaoxi',
          name: 'xiaoxi',
          component: () => import( '../views/xiaoxi.vue')
        },
        {
          path: '/my',
          name: 'my',
          component: () => import( '../views/my.vue')
        }
      
    ]
  },
  {
    path: '/newRoles',
    name: 'newRoles',
    component: () => import( '../views/newRoles.vue')
  },
  {
    path: '/glRoles',
    name: 'glRoles',
    component: () => import( '../views/glRoles.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
