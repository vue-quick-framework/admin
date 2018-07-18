import Vue from 'vue'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'

const cusAxios = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 15000
})
// cusAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Add a request interceptor
cusAxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
cusAxios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  // alert(error);
  return Promise.reject(error)
})

Vue.axios = cusAxios
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/devise.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  authType: 'devise',
  loginData: { url: process.env.API_HOST + '/auth_admin/sign_in', method: 'POST', redirect: '/' },
  logoutData: { url: process.env.API_HOST + '/auth_admin/sign_out', method: 'DELETE', redirect: '/login' },
  refreshData: { url: process.env.API_HOST + '/auth_admin/validate_token', method: 'GET', enabled: true, interval: 30 },
  fetchData: { url: process.env.API_HOST + '/auth_admin/validate_token', method: 'GET', enabled: true }
})

export default {
  install (Vue, options) {
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return cusAxios
        }
      }
    })
  }
}
