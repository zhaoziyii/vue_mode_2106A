<template>
    <div class="newRoles">
    <div class="top">
      <div class="left">9:41</div>
      <div class="content"></div>
      <div class="right"><img src="@/assets/tp.png" alt=""></div>
    </div>

    <div class="topTitle">
        <i class="iconfont icon-fanhui"></i>
        <span>新建居民信息</span>
        <span></span>
    </div>
    <br>
    <h4>居民基本信息</h4>
    <div class="div">
        <span class="span">真实姓名</span>
        <input type="text" placeholder="请填写居民的真实姓名">
    </div>
    <div class="div">
        <span class="span">身份证号</span>
        <input type="text" placeholder="请填写居民的身份证号">
    </div>
    <div class="div">
        <span class="span">性别</span>
        <input type="text" placeholder="请填写居民的性别">
    </div>
    <div class="div">
        <span class="span">出生日期</span>
        <input type="text" placeholder="请填写居民的出生日期">
    </div>
    <div class="div">
        <span class="span">手机号码</span>
        <input type="text" placeholder="请填写居民的出生日期">
    </div>
    <div class="div">
        <span class="span">登录号码</span>
        <input type="text" placeholder="请填写居民的手机号码">
    </div>
    <div class="div" style="border:none">
        <span class="span">现居地</span>
        <input type="text" placeholder="请填写居民的现居地">
    </div>
    <!-- hr -->
    <div class="hr"></div>
     <div class="div">
        <span class="span">居民标签</span>
        <input type="text" placeholder="请选择居民标签">
    </div>
    <ul class="bqBox">
        <li>高血压</li>
        <li>冠心病</li>
        <li>高血糖</li>
        <li>高血脂</li>
        <li>高血压</li>
        <li>冠心病</li>
        <li>高血糖</li>
        <li>高血脂</li>
    </ul>
    <div class="hr"></div>
     <div class="div">
        <span class="span">关联家人</span>
        <input type="text" placeholder="请选择该居民家人信息">
    </div>
     <div class="div" style="border:none;margin-bottom:10px">
        <span class="span">立即签约</span>
        <span></span>
    </div>
     <div class="hr" style="padding:10px"></div>

    
    <button class="btn">下一步</button>

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

.top {
    padding: 0 20px;
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
.topTitle{
    padding: 0 20px;
    display: flex;
    text-align: center;
    justify-content: space-between;
}
h4{
    height: 60px;
    align-items: 60px;
    background: #f7fafd;
    line-height: 60px;
    padding: 0 20px;
    font-weight: 500;
}
.div{
    margin: 0 10px;
    box-sizing: border-box;
    padding: 5px 20px;
    border-bottom: 1px solid #ccc;
    input{
        border: none;
        padding: 10px;
        outline: none;
    }
}
.hr{
    background: #f7fafd;
    width: 100%;
    height: 15px;
}
.bqBox{
    display: flex;
    padding: 15px 20px;
    flex-wrap: wrap;
    li{
        width: 23%;
        border: 1px solid #111;
        text-align: center;
        margin: 3px;
        box-sizing: border-box;
    }
}
.btn{
    width: 98%;
    display: block;
    margin: auto;
    border: none;
    padding: 10px 0 ;
    color: #fff;
    background: #4dd7bb;
}
</style>
