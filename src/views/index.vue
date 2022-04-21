<template>
  <div class="home">
    <div class="top">
      <div class="left">9:41</div>
      <div class="content"></div>
      <div class="right"><img src="@/assets/tp.png" alt=""></div>
    </div>
    <div class="title">
     <span> 
      <img src="@/assets/logo.png" alt="">
      <span>logo医生</span>
      </span>
      <img src="@/assets/ewm.png" alt="">
    </div>

    <!-- 救治人数 -->
    <ul class="bigBox">
      <li>
        <div>已签约人数</div>
        <b>1000</b>
      </li>
      <li>
        <div>待签约人数</div>
        <b>20</b>
      </li>
      <li>
        <div>居民总数</div>
        <b>1020</b>
      </li>
      <li>
        <div>待处理服务量</div>
        <b>10</b>
      </li>
      <li>
        <div>服务总量</div>
        <b>100</b>
      </li>
      <li>
        <div>服务评价</div>
        <b>4.9</b>
      </li>
    </ul>
    <!-- 图片 -->
    <div class="cont">
      <ul class="imgThere">
          <li>
            <img src="@/assets/blue.png" alt="">
            <div>新建文档</div>
          </li>
          <li>
            <img src="@/assets/yellow.png" alt="">
            <div>签约管理</div>
          </li>
          <li>
            <img src="@/assets/red.png" alt="">
            <div>服务管理</div>
          </li>
      </ul>
    </div>

    <!-- br -->
    <div class="br"></div>

    <!-- 下方盒子 -->
    <div class="score">
      <div class="scoreTop">
          <span>签约申请(3)</span>
          <span style="color:#ccc;font-size:14px">查看全部></span>
      </div>
      <div class="scoreBox">
        <div class="scorename">
          <span>王小明 58岁</span>
          <span style="color:red;font-size:12px">待审核</span>
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          身份证号 410104********0156
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          签约团队 李明明团队
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          服务包 老年人服务包
        </div>
      </div>
      <div class="scoreBox">
        <div class="scorename">
          <span>王小明 58岁</span>
          <span style="color:red;font-size:12px">待审核</span>
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          身份证号 410104********0156
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          签约团队 李明明团队
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          服务包 老年人服务包
        </div>
      </div>

    </div>
    <div class="score">
      <div class="scoreTop">
          <span>签约申请(3)</span>
          <span style="color:#ccc;font-size:14px">查看全部></span>
      </div>
      <div class="scoreBox">
        <div class="scorename">
          <span>王小明 58岁</span>
          <span style="color:red;font-size:12px">待审核</span>
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          身份证号 410104********0156
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          签约团队 李明明团队
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          服务包 老年人服务包
        </div>
      </div>
      <div class="scoreBox">
        <div class="scorename">
          <span>王小明 58岁</span>
          <span style="color:red;font-size:12px">待审核</span>
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          身份证号 410104********0156
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          签约团队 李明明团队
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          服务包 老年人服务包
        </div>
      </div>
      <div class="scoreBox">
        <div class="scorename">
          <span>王小明 58岁</span>
          <span style="color:red;font-size:12px">待审核</span>
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          身份证号 410104********0156
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          签约团队 李明明团队
        </div>
        <div class="scoreSfz" style="color:#ccc;font-size:12px;margin-top:10px">
          服务包 老年人服务包
        </div>
      </div>

    </div>

    <router-view></router-view>

    <div class="footer">
      <span>
        <img src="@/assets/sy.png" alt="">
        <div>首页</div>
      </span>
      <span @click="goJumin">
        <img src="@/assets/ge.png" alt="">
        <div>居民</div>
      </span>
      <span>
        <img src="@/assets/ax.png" alt="">
        <div>消息</div>
      </span>
      <span>
        <img src="@/assets/yh.png" alt="">
        <div>我的</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goJumin(){
      this.$router.push('./jumin')
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.top {
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .content {
    background: #111;
    width: 180px;
    height: 35px;
    border-radius: 15px;
    margin-top: -15px;
  }
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
  }
}
.bigBox {
  width: 100%;
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 200px;
  display: flex;
  background: #4bd6b9;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 14px;
  li {
    width: 33%;
    color: #fff;
    text-align: left;
    margin: 15px 0;
  }
}
.cont {
  background: #ccc;
  height: 110px;
}
.imgThere {
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 20px;
  height: 100px;
  align-items: center;
  border-radius: 10px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 40px;
      text-align: center;
    }
  }
}
.br{
  background: #f7fafd;
  width: 100%;
  height: 15px;
}
.score{
  .scoreTop{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .scoreBox{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px 10px;
    .scorename{
      display: flex;
      justify-content: space-between;
    }
  }
}
.footer{
  position: fixed;
  bottom: 0px;
  background: #fff;
  margin-top: -50px;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
}
</style>

