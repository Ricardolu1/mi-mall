<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
     <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <Loading v-if="isLoading" /> 
          <div v-show="!isLoading" class="order" v-for="(order,index) of list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) of order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.currentUnitPrice}} X {{item.quantity}} 元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status===20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <NoData v-if="!isLoading &&list.length===0" />
          <el-pagination
            class="pagenation"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            @current-change="handleChange"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Loading from '../components/Loading'
import NoData from '../components/NoData'
import { Pagination } from 'element-ui'

export default {
  name:'order-list',
  components:{
    [Pagination.name]:Pagination,
    OrderHeader,
    Loading,
    NoData,
  },
  data () {
    return {
      list:[],
      isLoading:true,
      pageSize:2,
      pageNum:1,
      total:0,
      busy:false,
    }
  },
  methods: {
    handleChange(pageNum){
      this.pageNum = pageNum
      window.scrollTo(0,0)
      this.getOrderList()
    },
    getOrderList(){
      this.isLoading = true
      this.axios.get('/orders',{
        params:{
          pageSize:2,
          pageNum:this.pageNum
        }
      }).then((res)=>{
        this.isLoading =false
        this.list = res.list
        this.total = res.total
      }).catch(()=>{
        this.isLoading =false
      })
    },
    goPay(orderNo){
      this.$router.push({
        path:'/order/pay',
        query:{
          orderNo
        }
      })
    }
  },
  mounted(){
    this.getOrderList()
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          // @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        /deep/.el-pagination{
          text-align:right;
        }
        /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: #FF6600;
          color: #FFF;
          &:hover{
            color: #FFF;
          }
        }
        /deep/.el-pagination.is-background .el-pager li:not(.disabled):hover {
          color:#FF6600
        }
      }
    }
  }
</style>