import Vue from 'vue';
import VueRouter from 'vue-router';
import Customers from '../views/Customers';
import Categories from '../views/Categories';
import NotFound from '../views/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/customers',
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
