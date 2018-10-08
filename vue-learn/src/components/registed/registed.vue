/*
 * @Author: YOKO 
 * @Date: 2018-03-30 22:25:48 
 * @Last Modified by: YOKO
 * @Last Modified time: 2018-09-21 22:42:51
 */
<template>
  <div class="registed">
    注册
    <buttons :color='red' :cFn="onClickFn"></buttons>
    <buttons :color='blue'></buttons>
    <p v-if="this.$store.state.open">显示文字</p>
    <button type="button" @click="clear">点击</button>
    <button @click="goOther(1)">去其他页面</button>
  </div>
</template>

<script>
import store from "@/vuex/store"
import buttons from './button';
export default {
  data() {
    return {
      red: 'red',
      blue: 'blue'
    }
  },
  mounted() {
    this.messages();
    console.log(this.$store.state.open);
    console.log(sessionStorage.open);
    console.log(sessionStorage.getItem('open'));
  },
  methods: {
    onClickFn() {
      this.$store.state.open = !this.$store.state.open;
      sessionStorage.setItem('open','成功');
      console.log(this.$store.state.open);
      console.log(sessionStorage.open);
      console.log(sessionStorage.getItem('open'));
    },
    clear() {
      sessionStorage.clear('open');
      console.log(sessionStorage.getItem('open'));
      console.log(sessionStorage.open);
      this.$router.push({ path: '/componentsVue', query:{ id: 123 } })
    },
    messages() {
      if(typeof WebSocket != 'undefined') {
        console.log('支持WebSocket');
      }else {
        console.log('不支持WebSocket');
      }
      if(typeof(EventSource)!=="undefined") {
        console.log('支持EventSource');
      }else {
        console.log('不支持EventSource');
      }
    },
    goOther(id) {
      this.$router.push({ path: '/other', query: { id: id }})
    }
  },
  components: {
    buttons
  },
  store
}
</script>

<style lang="scss" scoped>

</style>

