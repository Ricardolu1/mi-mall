<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <img class="icon-close" @click="$emit('cancel')" src="/imgs/icon-close.png" alt="">
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
        <a class="btn" href="javascript:;" 
          @click="$emit('submit')"
          v-if="btnType==='1'"
        >确定</a>
        <a class="btn" href="javascript:;" 
          @click="$emit('cancel')"
          v-if="btnType==='2'"
        >取消</a>
          <div class="btn-group" v-if="btnType==='3'">
            <a class="btn" href="javascript:;"  @click="$emit('submit')"
          v-if="btnType==='1'">确定</a>
            <a class="btn" href="javascript:;" @click="$emit('cancel')"
          v-if="btnType==='2'">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name:'modal',
  props:{
    //弹框类型：小small中middle大large 、表单
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型：1、确定按钮，2、取消按钮，3、确定取消都有
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean
  },
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="" scoped>

</style>