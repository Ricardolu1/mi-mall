<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="/#/index">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="username" @click="goOrderList">我的订单</a>
          <a class="my-cart" href="javascript:;" @click="gotoCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul class="clearfix">
                <li class="product" v-for="(item,index) of phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name:'nav-header',
  data () {
    return {
      phoneList:[]
    }
  },
  mounted(){
    this.getProductList()
    let params = this.$route.params
    if (params && params.from==='login') { //证明是从登陆页面过来的
      this.getCartCount()
    }
  },
  computed:{
    ...mapState(['username','cartCount'])
    // username(){
    //   return this.$store.state.username
    // },
    // cartCount(){
    //   return this.$store.state.cartCount
    // },
  },
  filters:{
    currency(val){
      if (!val) {return '0.00'}
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    goOrderList(){
      this.$router.push('/order/list')
    },
    login(){
      this.$router.push('/login'); 
    },
    logout(){
      this.axios.post('/user/logout').then(()=>{
        this.$message.success('退出成功')
        this.$cookie.set('userId','',{expires:'-1'})
        this.$store.dispatch('saveUserName','')
        this.$store.dispatch('saveCartCount',0)
      })
    },
    gotoCart(){
      this.$router.push('/cart');
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then((res)=>{
          this.phoneList = res.list
      })
    }
  },
}
</script>

<style  lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
  .header{
    .nav-topbar{
      line-height:39px;
      height:39px;
      background: #333;
      color:#b0b0b0;
      .container{
        @include flex();
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        a{
          display: inline-block;
          color:#b0b0b0;
          margin-right:17px;
          height:39px;
        }
        .my-cart{
          width:110px;
          background: #ff6600;
          text-align: center;
          margin-right:0px;     
          color:#ffffff;  
          .icon-cart{
            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png')
            margin-right:4px;
          } 
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        @include flex();
        height:112px;
        .header-menu{
          display: inline-block;
          padding-left:209px;
          width: 643px;
          .item-menu{
            display: inline-block;
            color:#333333;
            font-weight: bold;
            font-size:16px;
            line-height: 112px;
            margin-right:20px;
            span{
              cursor:pointer;
            }
            &:hover{
              color:$colorA;
              .children{
                height:220px;
                opacity:1;
              }
            }
            .children{
              position: absolute;
              top:112px;
              left:0;
              width:1226px;
              height:0;
              opacity: 0;
              overflow: hidden;
              border-top:1px solid #e5e5e5;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              text-align: center;
              z-index:3;
              background: #ffffff;
              transition:all .5s;
              .product{
                float: left;
                width:16.66%;
                height:220px;
                font-size: 12px;
                line-height: 12px;
                position: relative;
                &:before{
                  content:'';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid $colorF;
                  height:100px;
                }
                &:last-child:before{
                  display: none;
                }
                a{
                  display: inline-block;
                }
                img{
                  height:111px;
                  width:auto;
                  margin-top:26px;
                }
                .pro-img{
                  height:137px;
                }
                .pro-name{
                  font-weight:bold;
                  margin-top:19px;
                  margin-bottom: 8px;
                  color:$colorB;
                }
                .pro-price{
                  color:$colorA;
                }
              }
            }

          }
        }
        .header-search{
          width:319px;
          .wrapper{
            height:50px;
            border:1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input{
              box-sizing: border-box;
              border:none;
              border-right:1px solid #e0e0e0;
              height:50px;
              padding-left:14px;
              width:264px;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png')
              margin-left:17px;
            }
          }
        }
      }
    }
  }
</style>