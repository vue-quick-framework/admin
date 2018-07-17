import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import share from './share'
export default {
  install (Vue) {
    Vue.use(element, {
      size: 'medium' // set element-ui default size
      // i18n: (key, value) => i18n.t(key, value)
    })
    Vue.use(share)
  }
}
