<template>
  <el-menu class="navbar clearfix" mode="horizontal">
    <hamburger class="fl"></hamburger>
    <div class="content">
      <el-breadcrumb separator="/" class="breadcrumb fl">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--右侧-->
    <div class="right-menu fr">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <span>Hello</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              dashboard
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display: block;">logOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
export default {
  methods: {
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 51px;
    padding: 10px;
    line-height: 20px;
    overflow: hidden;

    .content {
      .breadcrumb {
        padding-left: 10px;
        line-height: 28px;
      }
      @include mobile-device {
        display: none;
      }
    }

    .right-menu {
      line-height: 28px;
    }
  }
</style>
