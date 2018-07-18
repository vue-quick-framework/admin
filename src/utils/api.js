import Vue from 'vue'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'

let cusAxios = axios
Vue.axios = cusAxios
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

export default {
  install (Vue, options) {
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return axios
        }
      }
    })
  }
}
