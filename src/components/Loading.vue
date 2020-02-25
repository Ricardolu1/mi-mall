<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bubbles.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'loading',
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  .loading{
    height:100px;
    line-height: 100px;
    text-align: center;
    padding: 30px 0;
    img{
      height:100%;
    }
  }
</style>