<template>
  <el-menu :default-active="$route.name" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="vertical">
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
export default {
  computed: {
    routes () {
      let routes = []
      try {
        routes = this.$router.options.routes[0].children || []
      } catch (err) {
        routes = []
      }
      return routes
    }
  },
  methods: {
    handleOpen () {
    },
    handleClose () {
    }
  }
}
</script>
