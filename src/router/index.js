import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Goods from '@/components/goods/goods.vue'
import Seller from '@/components/seller/seller.vue'
import Ratings from '@/components/ratings/ratings.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index'||'/', 
      name: 'index',
      component: App
    },
    {
      path: "/goods",
      name: "goods",
      component:Goods
    },
    {
      path: "/seller",
      name: "seller",
      component:Seller
    },
    {
      path: "/ratings",
      name: "ratings",
      component:Ratings
    }
  ]
})
