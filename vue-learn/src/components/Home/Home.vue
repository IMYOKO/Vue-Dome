<template>
  <div id="home">
    <p>{{$store.state.isLogin}}</p>
    <!-- 立即购买 -->
    <!--购买-->
    <div class="buy-wrapper">
      <div class="midder-wrapper">
        <input type="button" class="button" value="立即购买" @click="buy" />
      </div>
    </div>
    <!--购买-->
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
    buy() {
      this.isLogin = this.$store.state.isLogin;
      if(this.isLogin){
        console.log(this.isLogin);
        console.log('已经登录了');
      }else {
        console.log(this.isLogin);
        this.$router.push({ name:'Login' });
      }
    }
  },
  store
}
</script>

<style lang="scss" scoped>
$red: #e71727;
.midder-wrapper {
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
}
.buy-wrapper {
  width: 100%;
  height: 48px;
  line-height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;

  .button {
    color: #fff;
    width: 100%;
    height: 48px;
    font-size: 15px;
    text-align: center;
    display: block;
    border: none;
    background: $red;
  }
}
</style>