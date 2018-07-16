<template>
  <div class="clearfix" style="height: 100%">
    <sider-bar class="left-nav fl"></sider-bar>
    <div class="right-body">
      <nav-bar></nav-bar>
      <main-body></main-body>
    </div>
  </div>
</template>

<script>
import SiderBar from './SiderBar.vue'
import NavBar from './NavBar.vue'
import MainBody from './MainBody.vue'
export default {
  components: {
    SiderBar,
    NavBar,
    MainBody
  }
}
</script>

<style lang="scss" scoped>
  .left-nav {
    /*width: 201px;*/
    height: 100%;
  }
  .right-body {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
