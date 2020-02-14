<template>
  <div>
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
export default {
  name:'product',
  components:{
    ProductParam
  },
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>