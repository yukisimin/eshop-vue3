<!-- 顶部栏 footer容器 -->
<template>
  <div class="container">
      <!-- 顶部通栏 -->
      <app-topnav></app-topnav>
      <!-- 头部组件 -->
      <app-header></app-header>
      <!-- 内容容器 -->
      <div class="app-body">
          <!-- 二级路由 -->
          <router-view></router-view>
      </div>
      <!-- 底部组件 -->
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
export default {
  name: 'XtxLayout',
  components: { AppTopnav, AppHeader, AppFooter },
  // 获取分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style>
.app-body {
  min-height: 600px;
}
</style>
