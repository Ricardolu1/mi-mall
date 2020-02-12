<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        //to-do保存到vuex
      })
    },
    getCartCount(){
      this.axios.get('/cart/products/sum').then(()=>{
        //to-do保存到vuex
      })
    }
  },
  mounted(){
    this.getUser()
    this.getCartCount()
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/config.scss';
@import './assets/scss/modal.scss';
@import './assets/scss/button.scss';


  
</style>
