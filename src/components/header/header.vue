<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avater">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller:{
      type:Object
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/mixin.scss";
  .header{
    color:#fff;
    background-color: #000;
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0;//消除空白字符，两个div之间没有空隙
      .avater{
        display: inline-block;
        vertical-align:top
      }
      .content{
        display: inline-block;
        margin-left: 16px;
        font-size:14px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            @include bg-image('brand');
            background-size: 30px 18px;
          }
        };
        .description{
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        };
        .support{
          .icon{
            display:inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image('decrease_1');
            };
            &.discount{
              @include bg-image('discount_1');
            };
            &.discount{
              @include bg-image('discount_1');
            };
          }
        }

      }
    }
  }
</style>
