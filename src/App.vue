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
  mounted(){
    
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/config.scss';


  
</style>
