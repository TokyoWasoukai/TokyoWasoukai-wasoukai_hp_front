import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Activty from '../views/Activty.vue';
import Faq from '../views/Faq.vue';
import Contact from '../views/Contact.vue';


Vue.use(VueRouter);

const routes = [{
  path: '/',
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
  name: 'Faq',
  component: Faq,
}, {
  path: '/contact',
  name: 'Contact',
  component: Contact,
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
