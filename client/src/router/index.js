import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Documentation from '@/views/Documentation';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/documentation', name: 'Doc', component: Documentation },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "secondary" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "secondary" */ '../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
