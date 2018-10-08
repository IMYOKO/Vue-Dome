<template>
  <div id="aaa">
    这里是组件 {{color}}
    <button type="button" @click="changeFn">点击</button>
  </div>
</template>

<script>
import store from "@/vuex/store"
export default {
  props: {
    color: {},
    cFn: {
      type: Function
    }
  },
  data() {
    return {

    }
  },
  methods: {
    changeFn() {
      if(this.cFn){
        this.cFn();
      }else {
        console.log('没有这个参数')
      }
    }
  },
  store
}
</script>

<style lang="scss" >

</style>