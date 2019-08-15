//const Login = require('./components/Login');
//const HelloWorld = require('./components/HelloWorld');

import Vue from 'vue';
import Top from '@/components/Top';
import Login from '@/components/Login';
import About from '@/components/About';
import Dashboard from '@/components/Dashboard';
import NotFound from '@/components/NotFound';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Top', component: Top },
    { path: '/login', name: 'Login', component: Login },
    { path: '/about', name: 'About', component: About },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '*', component: NotFound },
  ],
});
