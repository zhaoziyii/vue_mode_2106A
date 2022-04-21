<template>
    <div class="my">
        <div class="top">
            <div class="left">9:41</div>
            <div class="content"></div>
            <div class="right"><img src="@/assets/tp.png" alt=""></div>
        </div>
        <h3>我的</h3>

        <div class="box">
            <div class="boxTop">
                <img src="@/assets/yisheng.png" alt="">
                <div class="boxright">
                    <div class="boxrightTop">
                        <span>李明明</span>
                        <span class="span">切换团队</span>
                    </div>
                    <span>护理医师</span>
                </div>
             
            </div>
            <br>
            <div style="color:#111;font-size:14px">所属团队：李明明专科团队</div>
            <br>
            <div style="color:#111;font-size:14px">所属机构：北京市怀柔区洛西社区卫生服务站</div>
        </div>
        <!-- hr -->
        <div class="hr"></div>
        <ul>
            <li><span>我的医生团队</span><span>></span></li>
            <li><span>签约管理</span><span>></span></li>
            <li><span>服务管理</span><span>></span></li>
            <li><span>使用指南</span><span>></span></li>
            <li><span>设置</span><span>></span></li>
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
    .my{
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
.box{
    width: 100%;
    height: 200px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    background: #ccc;
    margin-top: 10px;
}
.boxTop{
    display: flex;
    .boxright{
        flex: 1;
      
        padding: 0 10px;
        .boxrightTop{
            display: flex;
        justify-content: space-between;
        }
        .span{
            background: #3dd4a7;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 20px;padding: 0  5px;
            color: #fff;
            font-size: 14px;
        }
    }
}
.hr{
    background: #f6f9fc;
    height: 20px;
    width: 100%;
}
ul{
    li{
        height: 50px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 50px;
    }
}
</style>
