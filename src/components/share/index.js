export default {
  install (Vue) {
    Vue.component('Hamburger', (resolve) => {
      resolve(require('./single/Hamburger.vue'))
    })
  }
}
