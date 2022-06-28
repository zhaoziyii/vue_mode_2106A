<template>
  <div class="updataPassword">
    <van-nav-bar title="设置密码" left-arrow @click-left="onClickLeft" />
    <van-cell-group inset>
      <van-field v-model="user_pass1" placeholder="请设置登录密码" />
      <van-field v-model="user_pass" placeholder="请再次输入密码" />
      <button @click="upDatePass">提交</button>
    </van-cell-group>
  </div>
</template>

<script setup>
import { Toast } from "vant";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
const router = useRouter();
const route = useRoute();
const { proxy } = getCurrentInstance();
const params = reactive({
  sms_code: "",
  mobile: "",
});
onMounted(() => {
  params.sms_code = route.query.sms_code;
  params.mobile = route.query.mobile;
});
let user_pass = ref("");
let user_pass1 = ref("");

/* 返回注册 */
const onClickLeft = () => {
  router.push("./login");
};
/* 确定修改密码 */
const upDatePass = async () => {
  if (user_pass.value != user_pass1.value) {
    Toast.fail("密码不一致");
  } else if (user_pass.value == user_pass1.value) {
    const res = await proxy.$API.upDataPassword({
      sms_code: params.sms_code,
      mobile: params.mobile,
      user_pass: user_pass.value,
    });
    console.log(res);
    if (res.data.code == 200) {
      router.push(`/enroll?user_pass=${user_pass.value}`);
    }
  }
};
</script>

<style lang="scss">
:deep(.van-nav-bar) {
  color: #111 !important;
}
.van-cell {
  border-bottom: 1px solid #e0ddd6;
  padding: 10px 20px !important;
}
button {
  display: block;
  border: none;
  width: 100%;
  color: #fff;
  background: #f15a24;
  border: none;
  padding: 20px 0;
  margin-top: 30px;
}
</style>
