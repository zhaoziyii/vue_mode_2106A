<template>
    <div class="glRoles">
         <div class="top">
      <div class="left">9:41</div>
      <div class="content"></div>
      <div class="right"><img src="@/assets/tp.png" alt=""></div>
    </div>

    <div class="topTitle">
        <i class="iconfont icon-fanhui"></i>
        <span>关联家人信息</span>
        <span class="span">完成</span>
    </div>

    <h6>家人信息</h6>

    <div class="div">
        <span class="span">选择家人</span>
        <input type="text" placeholder="请选择该居民家人信息">
    </div>
    <div class="div">
        <span class="span">与本人关系</span>
        <input type="text" placeholder="请选择家人与该居民关系">
    </div>
    
    <div class="add">+新增关联家人</div>
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
.glRoles{
    background: #f7fafd;
    height: 100vh;
}
.top {
  padding: 0 20px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: #fff;
  .content {
    background: #111;
    width: 180px;
    height: 35px;
    border-radius: 15px;
    margin-top: -15px;
  }
}
.topTitle{
    background: #fff;
    padding: 0 20px 10px;
    display: flex;
    text-align: center;
    justify-content: space-between;
    .span{
        color: #3dd4a7;
    }
}
h6{
    margin-left: 20px;
    color: #ccc;
    margin-top: 20px;
}
.div{
    background: #fff;
    box-sizing: border-box;
    padding: 5px 20px;
    border-bottom: 1px solid #ccc;
    input{
        border: none;
        padding: 10px;
        outline: none;
    }
}
.add{
    width: 100%;
    font-size: 14px;
    color: #28d0a2;
    margin:  10px 0 ;
    text-align: center;
}
</style>
