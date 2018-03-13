<template>
  <div id="login">
    <span @click="login">登录</span>
    <p>{{$store.state.isLogin}}</p>
  </div>
</template>

<script>
import store from "@/vuex/store"
export default {
  data() {
    return {
      isLogin: null
    }
  },
  methods: {
    login() {
      this.$store.state.isLogin = !this.$store.state.isLogin;
      this.isLogin = this.$store.state.isLogin;
      if(this.isLogin) {
        console.log(this.isLogin);
        this.$router.push({ name:'Home' });
      }else {
        console.log(this.isLogin);
        console.log('未登录');
      }
    }
  },
  store
}
</script>

<style lang="scss" scoped>

</style>