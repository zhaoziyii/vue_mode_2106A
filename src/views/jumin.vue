<template>
  <div class="jumin">
      <div class="top">
        <div class="left">9:41</div>
        <div class="content"></div>
        <div class="right"><img src="@/assets/tp.png" alt=""></div>
      </div>
      <div>居民</div>
      <input class="ip1" type="text" placeholder="搜索居民姓名/电话">
      <div class="box1"><img src="@/assets/wqy.png" alt=""> <span> 未签约居民</span></div>
      <div class="box1"><img src="@/assets/bq.png" alt=""> <span> 标签</span></div>
      <div class="box1"><img src="@/assets/qf.png" alt=""> <span> 群发消息</span></div>
      <div class="contetnt">
        <div class="a">A</div>
        <div class="contentBox">
          <img src="@/assets/wyr.png" alt="">
          <div class="right">
            <div class="bi-box">
              <div class="name">王嫣然<span style="color:#ccc;font-size:12px"> 26岁</span></div>
            <span style="font-size:14px;color:#fdddb0;background:#fff8e4">低血糖</span> &nbsp;
            <span style="font-size:14px;color:#fb7480;background:#fff1f0">颈椎病</span>
            </div>
          </div>
        </div>
        <div class="contentBox">
          <img src="@/assets/wyr.png" alt="">
          <div class="right">
            <div class="bi-box">
              <div class="name">王梦<span style="color:#ccc;font-size:12px"> 58</span></div>
            <span style="font-size:14px;color:#6c76f4;background:#f1f2fe">高血压</span> &nbsp;
          
            </div>
          </div>
        </div>
      </div>
      <div class="contetnt">
        <div class="a">b</div>
        <div class="contentBox">
          <img src="@/assets/wyr.png" alt="">
          <div class="right">
            <div class="bi-box">
              <div class="name">王嫣然<span style="color:#ccc;font-size:12px"> 26岁</span></div>
            <span style="font-size:14px;color:#fdddb0;background:#fff8e4">低血糖</span> &nbsp;
            <span style="font-size:14px;color:#fb7480;background:#fff1f0">颈椎病</span>
            </div>
          </div>
        </div>
        <div class="contentBox">
          <img src="@/assets/wyr.png" alt="">
          <div class="right">
            <div class="bi-box">
              <div class="name">王梦<span style="color:#ccc;font-size:12px"> 58</span></div>
            <span style="font-size:14px;color:#6c76f4;background:#f1f2fe">高血压</span> &nbsp;
          
            </div>
          </div>
        </div>
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.jumin {
  padding: 0 20px;
  margin-bottom: 50px;
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
.ip1 {
  width: 100%;
  height: 30px;
  margin: 10px 0 20px 0;
}
.box1 {
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.contetnt {
  .a {
    // height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #f7fafd;
  }
}
.contentBox {
  display: flex;
  align-items: center;
    height: 80px;
  border-bottom: 1px solid #111;
  width: 100%;
}

</style>
