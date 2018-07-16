<template>
  <div class="clearfix" style="height: 100%">
    <slider-bar class="left-nav fl"></slider-bar>
    <div class="right-body">
      <nav-bar></nav-bar>
      <main-body></main-body>
    </div>
  </div>
</template>

<script>
import SliderBar from './SliderBar.vue'
import NavBar from './NavBar.vue'
import MainBody from './MainBody.vue'
export default {
  components: {
    SliderBar,
    NavBar,
    MainBody
  }
}
</script>

<style lang="scss" scoped>
  .left-nav {
    width: 201px;
    height: 100%;
  }
  .right-body {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
