<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import storage from './storage/index'

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    // storage.setItem('a',1)
   // storage.setItem('user',{b:1})
   storage.clear("a","user")
  }
}
</script>

<style>

</style>
