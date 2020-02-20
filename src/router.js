import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
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
          component:Product
        },{
          path:'detail/:id',
          name:'detail',
          component:Detail
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path:'list',
          name:'order-list',
          component:orderList
        },
        {
          path:'confirm',
          name:'order-confirm',
          component:orderConfirm
        },
        {
          path:'pay',
          name:'order-pay',
          component:orderPay
        },
        {
          path:'alipay',
          name:'alipay',
          component:Alipay
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})











