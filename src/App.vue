<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      age:20
    }
  },
  mounted(){
    let url = "https://www.easy-mock.com/mock/5e281cf4c1918a3d8e4b2e01/api/getinfo"
    jsonp(url,()=>{
      
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
