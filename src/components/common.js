import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  installed (Vue) {
    Vue.use(element, {
      size: 'medium' // set element-ui default size
      // i18n: (key, value) => i18n.t(key, value)
    })
  }
}
