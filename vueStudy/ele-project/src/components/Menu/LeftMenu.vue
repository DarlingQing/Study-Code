<template>
  <el-aside width="200px">
    <el-menu
      default-active="1-1"
      unique-opened="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>知识点</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Vue坑点</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">列表1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<style>

</style>
<script>

</script>
