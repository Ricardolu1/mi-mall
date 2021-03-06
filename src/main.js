import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

//根据前端的跨域方式做调整  /a/b : /api/a/b =>/a/b
// axios.defaults.baseURL = '/api'  //跟webpack配置联系起来
// mock开关
// const mock = false
// if (mock) {
//   require('./mock/api')
// }
axios.defaults.timeout = 8000
//根据环境变量获取不同的环境地址
axios.defaults.baseURL = '/api'
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  let path = location.hash
  if (res.status === 0) {
    return res.data
  }else if(res.status===10){
    if (path!=='#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
},(error)=>{
  let res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

Vue.prototype.$message = Message
Vue.config.productionTip = false //生产环境的提示，开发环境下默认关掉

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
