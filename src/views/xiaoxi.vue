<template>
    <div class="xiaoxi">
        <div class="top">
        <div class="left">9:41</div>
        <div class="content"></div>
        <div class="right"><img src="@/assets/tp.png" alt=""></div>
      </div>
      <h3>消息</h3>
      <ul>
          <li>
              <img src="@/assets/jia.png" alt="">
              <div class="right">
                  <div class="rightTop">
                      <span>服务消息</span>
                      <span>2021-04-30</span>
                  </div>
                    <div class="rightBottom">你有一条新的签约申请</div>
              </div>
        </li>
          <li>
              <img src="@/assets/pj.png" alt="">
              <div class="right">
                  <div class="rightTop">
                      <span>系统消息</span>
                      <span>2021-04-30</span>
                  </div>
                    <div class="rightBottom">评价通知</div>
              </div>
        </li>
          <li>
              <img src="@/assets/mm.png" alt="">
              <div class="right">
                  <div class="rightTop">
                      <span>李明明</span>
                      <span>2021-04-30</span>
                  </div>
                    <div class="rightBottom">周日上午您有空吗</div>
              </div>
        </li>
          <li>
              <img src="@/assets/mm.png" alt="">
              <div class="right">
                  <div class="rightTop">
                      <span>李明明</span>
                      <span>2021-04-30</span>
                  </div>
                    <div class="rightBottom">周日上午您有空吗</div>
              </div>
        </li>
          <li>
              <img src="@/assets/mm.png" alt="">
              <div class="right">
                  <div class="rightTop">
                      <span>李明明</span>
                      <span>2021-04-30</span>
                  </div>
                    <div class="rightBottom">周日上午您有空吗</div>
              </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style lang="scss" scoped>
    .xiaoxi{
        padding: 0 20px;
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
ul{
    li{
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 10px 0 ;
        .right{
            flex: 1;
        }
        .rightTop{
            display: flex;
            flex: 1;
            justify-content: space-between;
            padding: 0 10px;
        }
        .rightBottom{
            font-size: 14px;
            padding:  0 10px;
            margin-top: 10px;
            color: #ccc
        }
    }
    
}
</style>
