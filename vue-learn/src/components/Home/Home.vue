<template>
  <div id="home">
    <!-- 立即购买 -->
    <p>{{homedata}}</p>
    <p v-html="homedata"></p>

    <input type="text" v-model="name" placeholder="输入姓名">
    <input type="password" v-model="password" placeholder="输入密码">
    <button @click="sumbit">提交</button>
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
      isLogin: null,
      homedata: '',
      name: '',
      password: ''
    }
  },
  created () {
    this.isLogin = this.$store.state.isLogin;
  },
  mounted () {
    this.getHome();
    console.log(this.isLogin);
    // this.isLogin = this.$store.state.isLogin;
    console.log(this.isLogin);
    if(sessionStorage.login){
      console.log('登录没？ '+sessionStorage.login)
    }else{
      console.log('sessionStorage.login')
    }
  },
  methods: {
    async getHome () {
      let res = await this.$axios.get('/api')
      this.homedata = res.data;
      console.log(res)
    },
    async sumbit() {
      let data = {
        name: this.name,
        password: this.password
      }
      console.log(data);
      let res = await this.$axios.post('/api/register', data)
      console.log(res)
    },
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