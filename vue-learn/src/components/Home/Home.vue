<template>
  <div id="home">
      <input type="text" class="form-control" placeholder="搜索" v-model='value'>
      <button @click="seach" class="seach">搜索</button>
      <button class="btn btn-default" @click="change">2D</button>
      <!-- <button class="btn btn-default btn-primary">3D</button> -->
    <!-- 立即购买 -->
    <p>{{homedata}}</p>
    <p v-html="homedata"></p>
    <div id="map-container"></div>
    <img src="../../assets/start.png" alt="">
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
import fengmap from 'fengmap'
export default {
  data() {
    return {
      isLogin: null,
      homedata: '',
      name: '',
      password: '',
      map: null,
      value: ''
    }
  },
  created () {
    this.isLogin = this.$store.state.isLogin;
  },
  mounted () {
    var navi = null;
    this.map = new fengmap.FMMap( {
      container: document.getElementById('map-container'), //渲染dom
        //开发者申请应用名称
        appName:'会议展示demo',
        //开发者申请应用下web服务的key
        key:'6f7c9d03b54ef31b4a6ff1eb77c9025e',
        defaultViewMode: fengmap.FMViewMode.MODE_2D
    });
    this.map.openMapById('90875');
    this.map.on('loadComplete', () => {
      //初始化导航对象
      navi = new fengmap.FMNavigation({
        map: this.map,
        // 设置导航线的样式
        lineStyle: {
          //设置线为导航线样式
          lineType: fengmap.FMLineType.FMARROW,
          lineWidth: 6,
          //设置线的颜色
          // godColor: '#FF0000',
          //设置边线的颜色
          // godEdgeColor: '#920000',
        }
      });
    });
    var clickCount = 0;

    //判断起点是否是同一处坐标
    var lastCoord = null;
    this.map.on('mapClickNode', (event) => {
      if (event.nodeType == fengmap.FMNodeType.MODEL && navi != undefined) {
        var modelLabel = event.label;
        var coord;

        // 如果拾取的模型没有Label对象，则使用模型中心点的坐标
        // 有则使用与模型对应的Label对象的坐标。
        if (!modelLabel) {
          coord = {
            x: event.mapCoord.x,
            y: event.mapCoord.y,
            groupID: event.groupID
          }
        } else {
          coord = {
            x: modelLabel.mapCoord.x,
            y: modelLabel.mapCoord.y,
            groupID: event.groupID
          };
        }

        //第三次点击清除路径，重现设置起点起点
        if (clickCount == 2) {
          navi.clearAll();
          clickCount = 0;
          lastCoord = null;
        }

        //第一次点击添加起点
        if (clickCount == 0) {
          lastCoord = coord;
          navi.setStartPoint({
            x: coord.x,
            y: coord.y,
            height: 2,
            groupID: coord.groupID,
            url: '../../../static/image/start.png',
            size: 32
          });
        } else if (clickCount == 1) { //添加终点并画路线
          //判断起点和终点是否相同
          if (lastCoord.x == coord.x) {
            console.log('相同地点');
            // $('#message').attr("class", "alert alert-warning");
            return;
          } else {
            console.log('不同地点');
            // $('#message').attr("class", "alert alert-warning hidden");
          }

          navi.setEndPoint({
            x: coord.x,
            y: coord.y,
            height: 2,
            groupID: coord.groupID,
            url: '../../../static/image/end.png',
            size: 32
          });

          // 画导航线
          navi.drawNaviLine();
        }
        clickCount++;
      }
    })
    // this.getHome();
    // console.log(this.isLogin);
    // // this.isLogin = this.$store.state.isLogin;
    // console.log(this.isLogin);
    // if(sessionStorage.login){
    //   console.log('登录没？ '+sessionStorage.login)
    // }else{
    //   console.log('sessionStorage.login')
    // }
  },
  methods: {
    change () {
      this.map.viewMode = fengmap.FMViewMode.MODE_2D;
    },
    seach () {
      console.log(this.value);
    },
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
button.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 101;
}
.seach {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 102;
}
.form-control {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
}
#map-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
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