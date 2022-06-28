<template slot-scope="scope">
  <div class="uptel">
    <Header right="" title="修改手机号" @goBack="router.back()"></Header>

    <div class="tel">当前手机号: {{ initList.tel }}</div>
    <div class="tels btb">
      <span>新手机号码:</span>
      <input type="text" placeholder="请输入新手机号码" v-model="newPaswd" />
    </div>
    <div class="tels">
      <span>验证码</span>
      <input type="text" placeholder="请输入验证码" v-model="pswCode" />
      <button @click="getCode">获取验证码</button>
    </div>
    <!-- 确定修改手机号 -->
    <div class="button">
      <button class="isOkUp" @click="isOkUp">确定修改手机号</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, getCurrentInstance, onMounted } from "vue";
import Header from "../../../../components/Header.vue";
import { Toast } from "vant";
const { proxy } = getCurrentInstance();
const router = useRouter();
let initList = ref([]);
let pswCode = ref([]);
let newPaswd = ref([]);
onMounted(() => {
  getInit();
});
/* 默认数据请求 */
const getInit = async () => {
  const res = await proxy.$API.showoneApi({ id: localStorage.getItem("id") });
  console.log(res);
  initList.value = res.data.data;
};
/* 获取验证码 */
const getCode = async () => {
  const res = await proxy.$API.getyzApi({
    sms_type: "editmobile",
    mobile: newPaswd.value,
  });
  console.log(res);
};
const isOkUp = async () => {
  const res = await proxy.$API.modifyMobileApi({
    current_mobile: initList.value.tel,
    new_mobile: newPaswd.value,
    sms_code: pswCode.value,
    sms_type: "editmobile",
  });
  if (res.data.code == 200) {
    Toast(res.data.msg);
    router.push("./setting");
  } else {
    Toast(res.data.msg);
  }
  console.log(res);
};
</script>

<style lang="scss" scoped>
.uptel {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
.btb {
  border-bottom: 1px solid #ccc;
}
.tel {
  height: 88px;
  margin: 0 30px;
  line-height: 88px;
  font-size: 25px;
  border-bottom: 1px solid #ccc;
}
.tels {
  height: 88px;
  margin: 0 30px;
  line-height: 88px;
  font-size: 25px;
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  input {
    height: 60px;
    border: none;
    margin: 50px;
  }
  button {
    height: 60px;
    border: none;
    line-height: 60px;
    padding: 0 30px;
    box-sizing: border-box;
    color: #fff;
    background: #f15a24;
  }
}
.button {
  width: 100%;
  padding: 40px 30px;
  box-sizing: border-box;
  .isOkUp {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: #ffff;
    display: block;
    background: #f15a24;
    padding: 20px 30px;
    width: 100%;
  }
}
</style>
