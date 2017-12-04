import Vue from 'vue'
import Router from 'vue-router'

import shop from './../views/shop';
import shopList from './../views/shopList/shopList.vue';
// import shopCar from './../views/shopCar/shopCar.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/shop',
      name:'shop',
      component:shop,
      children:[
        {
          path:'list',
          name:'list',
          component:shopList
        },
        {
          path:'car',
          name:'car',
          // component:shopCar
        }
      ]
    }
  ]
})
