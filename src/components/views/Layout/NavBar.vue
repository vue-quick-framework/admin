<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="fl"></hamburger>
    <el-breadcrumb separator="/" class="breadcrumb fl">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </el-menu>
</template>

<script>
import Hamburger from '@/components/share/single/Hamburger'
export default {
  components: {
    Hamburger
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 51px;
    padding: 10px;
    line-height: 20px;

    .breadcrumb {
      padding-left: 10px;
      line-height: 28px;
    }
  }
</style>
