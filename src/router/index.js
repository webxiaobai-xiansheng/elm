import Vue from 'vue'
import Router from 'vue-router'
import VueResouce from 'vue-resource'
import App from '@/App'
import Goods from '@/components/goods/goods.vue'
import Seller from '@/components/seller/seller.vue'
import Ratings from '@/components/ratings/ratings.vue'


Vue.use(Router)
Vue.use(VueResouce)

export default new Router({
  linkActiveClass:'is-active',
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
