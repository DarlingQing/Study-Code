<template>
  <div id="app">
    <el-container class="full-height">
      <el-header class="header">Element-UI && Vue Project</el-header>
      <el-container class="full-height">
        <!-- LeftMenu -->
        <left-menu></left-menu>
        <!--RightMain-->
        <el-container class="full-height">
          <el-main class="full-height main-card">
            <transition>
                <router-view>

                </router-view>
            </transition>
          </el-main>
          <el-footer>Element 文档支持，基于Vue2.0的Demo</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight:400;
  }
  #app {
    height: 100%;
  }
  .full-height {
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #373d41;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .header {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 80px !important;
    line-height: 80px;

  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
<script>
  import LeftMenu from "./components/Menu/LeftMenu.vue";
  export default {
    components: {
      LeftMenu
    },
    name: 'app'
  }
</script>
