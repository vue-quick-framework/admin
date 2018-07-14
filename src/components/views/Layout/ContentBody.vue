<template>
  <div class="content-body">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return []
    },
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-body {
    /*84 = navbar + tags-view = 50 +34 */
    min-height: calc(100vh - 84px);
    position: relative;
    overflow: hidden;
    /*fade-transform*/
    .fade-transform-leave-active,
    .fade-transform-enter-active {
      transition: all .5s;
    }
    .fade-transform-enter {
      opacity: 0;
      transform: translateX(-30px);
    }
    .fade-transform-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
  }
</style>
