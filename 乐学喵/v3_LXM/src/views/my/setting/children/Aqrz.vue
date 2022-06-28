<template>
  <div class="Aqrz">
    <Header @goBack="router.go(-1)" right="" title="安全认证"></Header>
    <div class="bzaq">为保障您的账户安全，更换手机号前需要先安全验证</div>
    <div class="tel">当前手机号: {{ initList.tel }}</div>
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
    mobile: initList.value.tel,
  });
  console.log(res);
};
/* 确认修改手机号 */
const isOkUp = async () => {
  const res = await proxy.$API.verifySmscodeApi({
    mobile: initList.value.tel,
    sms_code: pswCode.value,
    sms_type: "editmobile",
  });
  console.log(res);
  if (res.data.code == 200) {
    Toast(res.data.msg);
    router.push("./uptel");
  } else {
    Toast(res.data.msg);
  }
};
</script>

<style lang="scss" scoped>
.Aqrz {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.bzaq {
  width: 100%;
  background: #f8f8f8;
  height: 88px;
  font-size: 25px;
  text-align: center;
  line-height: 88px;
  color: #555;
}
.tel {
  height: 88px;
  margin: 0 30px;
  line-height: 88px;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
}
.tels {
  height: 88px;
  margin: 0 30px;
  line-height: 88px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 60px;
    border: none;
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
