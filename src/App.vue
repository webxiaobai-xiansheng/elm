<template>
  <div id="app">
    <v-header></v-header>

    <div class="tab">
      <div class="tab-item">
        <!-- <a v-link="{path:'/goods'}">商品</a> 低版本-->
        <!-- rouer-link是高版本的 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <!-- <a v-link="{path:'/ratings'}">评论</a> -->
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <!-- <a v-link="{path:'/seller'}">商家</a> -->
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <router-view/>
  </div>
</template>

<script>

  import header from './components/header/header.vue';

  export default {
    components:{
      'v-header': header
    }
  }
</script>
 

<style lang="scss" scoped> 
// 为了使样式私有化（模块化），不对全局造成污染，可以在style标签上添加scoped属性以表示它的只属于当下的模块，
  #app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .tab-item{
        flex: 1;
        text-align: center
        
      }
    }
  }
</style>
