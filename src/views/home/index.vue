<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
     <!-- 面包屑 -->
      <!-- <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/category/1005000">电器</XtxBreadItem>
        <XtxBreadItem >空调</XtxBreadItem>
      </XtxBread> -->
         <!-- 轮播图 -->
      <HomeBanner />
      <!-- 新鲜好物 -->
      <HomeNew />
    <!-- 人气推荐 -->
      <HomeHot />
          <!-- 热门品牌 -->
   <HomeBrand />
       <!-- 商品区域 -->
   <HomeProduct />
       <!-- 最新专题 -->
    <HomeSpecial />
      </div>
    </div>
  </div>
</template>
<script>
// 项目在线地址：http://erabbit.itheima.net/

import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
import HomeBrand from './components/home-brand'
import HomeSpecial from './components/home-special'
import HomeProduct from './components/home-product'
// import XtxBreadItem from '@/components/library/xtx-bread-item'
export default {
  name: 'PageHome',
  components: { HomeSpecial, HomeBanner, HomeCategory, HomeNew, HomeHot, HomeBrand, HomeProduct }
}
</script>
<style scoped lang="less"></style>
