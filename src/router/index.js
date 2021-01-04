import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Activty from '../views/Activty.vue';
import FAQ from '../views/FAQ.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/activty',
    name: 'Activty',
    component: Activty,
  }, {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
