<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <loading v-if="loading" /> 
    <div class="from" v-html="content"></div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Loading from '../components/Loading'
export default {
  name:'alipay',
  components:{
    Loading,
    OrderHeader,
    
  },
  data () {
    return {
      orderId:this.$route.query.orderId,
      content:'',
      loading:true
    }
  },
  methods: {
    paySubmit(){
      this.axios.post('pay',{
        orderId:this.orderId,
        orderName:'vue高仿小米商城', //扫码支付时订单名称
        amount:'0.01',//单位元
        payType:1 //1支付宝，2微信
      }).then((res)=>{
        this.content=res.content
        setTimeout(() => {
          document.forms[0].submit()
        }, 100);
      })
    }
  },
  mounted(){
    this.paySubmit()
  }
}
</script>

<style lang="scss" scoped>

</style>