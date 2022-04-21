<template>
  <div class="home">
 

    <router-view></router-view>

    <div class="footer">
      <span @click="$router.push('./index')">
        <img src="@/assets/sy.png" alt="">
        <div>首页</div>
      </span>
      <span @click="goJumin">
        <img src="@/assets/ge.png" alt="">
        <div>居民</div>
      </span>
      <span @click="$router.push('./xiaoxi')">
        <img src="@/assets/ax.png" alt="">
        <div>消息</div>
      </span>
      <span @click="$router.push('./my')">
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

