/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/components/views/Layout/Index'

Vue.use(Router)

Vue.router = new Router({
  routes: [{ path: '', component: Layout, redirect: 'dashboard', children: [{
      path: 'dashboard', name: 'Dashboard', meta: { title: 'dashboard', icon: 'dashboard', noCache: true }, component: (resolve) => { require(['@/pages/dashboard/Index'], resolve) },
    }, {
      path: 'users', name: 'User', meta: { title: 'users', icon: 'user', noCache: true }, component: (resolve) => { require(['@/pages/users/Index'], resolve) },
    }]
  }, {
    path: '/login', name: 'Login', meta: { title: 'Login' }, component: (resolve) => { require(['@/components/views/Login/Index'], resolve) },
  }]
})
export default Vue.router
