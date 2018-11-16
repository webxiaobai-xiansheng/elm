<template>
  <div id="app">
    <!-- 头部 -->
    <v-header :seller='seller'></v-header>

    <!-- 菜单栏 -->
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

    <!-- 添加组件 -->
    <router-view/>
  </div>
</template>

<script>
  // 引入头部组件
  import header from "./components/header/header.vue";

  // 注入组件
  export default {
    data () {
      return {
        seller:{}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response)=>{
        // console.log(response);
        response=response.body;
        // console.log(1);
        // console.log(response);
        if(response.errno===0){
          // console.log(1);
          this.seller=response.data;
          // console.log(this.seller);
        }
      })
    },
    components: {
      "v-header": header
    }
  };
</script>
 

<style lang="scss" scoped>
  // 为了使样式私有化（模块化），不对全局造成污染，可以在style标签上添加scoped属性以表示它的只属于当下的模块，
  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      .tab-item {
        flex: 1;
        text-align: center;
        a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
        }
        // 激活状态
        .is-active {
          color: rgb(240, 20, 20);
        }
      }
    //   &::after{
    //   content: '';
    //   position: absolute;
    //   bottom:0;
    //   left: 0;
    //   background: rgba(7, 17, 27, .1);
    //   width: 100%;
    //   height: 1px;
    //   -webkit-transform: scaleY(0.5);
    //   transform: scaleY(0.5);
    //   -webkit-transform-origin: 0 0;
    //   transform-origin: 0 0;
    // }
    }
  }
</style>
