import Vue from 'vue'
import Router from 'vue-router'
// import Login from './pages/login'
import Home from './pages/home'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
import Cart from './pages/cart'
// import Order from './pages/order'
import orderConfirm from './pages/orderConfirm'
import orderList from './pages/orderList'
import orderPay from './pages/orderPay'
import Alipay from './pages/alipay'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path:'index',
          name:'index',
          component:Index 
        },{
          path:'product/:id',
          name:'product',
          component:resolve =>require(['./pages/product.vue'],resolve)
        },{
          path:'detail/:id',
          name:'detail',
          component:resolve =>require(['./pages/detail.vue'],resolve)
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:resolve =>require(['./pages/cart.vue'],resolve)
    },
    {
      path:'/order',
      name:'order',
      component:()=>import('./pages/order.vue'),
      children:[
        {
          path:'list',
          name:'order-list',
          component:()=>import('./pages/orderList.vue'),
        },
        {
          path:'confirm',
          name:'order-confirm',
          component:resolve =>require(['./pages/orderConfirm.vue'],resolve)
        },
        {
          path:'pay',
          name:'order-pay',
          component:resolve =>require(['./pages/orderPay.vue'],resolve)
        },
        {
          path:'alipay',
          name:'alipay',
          component:resolve =>require(['./pages/alipay.vue'],resolve)
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./pages/login.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})











