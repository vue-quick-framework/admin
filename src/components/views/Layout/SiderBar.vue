<template>
  <el-menu :default-active="$route.name" :collapse="!sidebar.opened" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="vertical">
    <template v-for="(route, index) in routes">
      <router-link :to="{name: route.name}" :key="index">
        <el-menu-item :index="route.name">
          <i class="el-icon-menu"></i>
          <span slot="title">{{route.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    routes () {
      let routes = []
      try {
        routes = this.$router.options.routes[0].children || []
      } catch (err) {
        routes = []
      }
      return routes
    }
  }
}
</script>
