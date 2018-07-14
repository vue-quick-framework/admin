/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/components/views/Layout/Index'

Vue.use(Router)

export default new Router({
  routes: [{ path: '', component: Layout, redirect: 'dashboard', children: [{
      path: 'dashboard', name: 'dashboard', meta: { title: 'dashboard', icon: 'dashboard', noCache: true }, component: () => import('@/pages/dashboard/Index'),
    }]
  }]
})
