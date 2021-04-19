import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Documentation from '@/views/Documentation';
import MyWall from '@/views/MyWall';
import MyFeed from '@/views/MyFeed';
import Login from '@/views/Login'
import Users from '@/views/Users'
import Session from '../models/Session';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/documentation', name: 'Doc', component: Documentation },
  { path: '/login', name: 'Login', component: Login },
  { path: '/mywall', name: 'MyWall', component: MyWall },
  { path: '/feed', name: 'MyFeed', component: MyFeed },
  { path: '/users', name: 'Users', component: Users },
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

router.beforeEach( (to, from, next) =>{
    console.log({ from, to })
    if(to.path == '/mywall' && !Session.user){
        Session.nextRoute = to;
        next('/login') 
    }else{
      next();
    }
} )

export default router
