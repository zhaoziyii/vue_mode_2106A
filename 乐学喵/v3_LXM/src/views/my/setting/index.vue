<template>
  <div class="setting">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <!-- 更换绑定手机号 -->
    <van-cell title="更换绑定手机号" is-link @click="goAqrz">
      <template #value>
        <span class="custom-title">{{ initList.tel }}</span>
      </template>
    </van-cell>
    <!-- 设置密码 -->
    <van-cell title="设置密码" is-link @click="goupPassword">
      <template #value>
        <span class="custom-title"></span>
      </template>
    </van-cell>
    <!-- 关于我们 -->
    <van-cell title="关于我们" is-link>
      <template #value>
        <span class="custom-title"></span>
      </template>
    </van-cell>
    <!-- 上课短信通知 -->
    <van-cell title="上课短信通知">
      <template #value>
        <van-switch v-model="checked">
          <div class="icon-wrapper">
            <van-icon :name="checked ? 'success' : 'cross'" />
          </div>
        </van-switch>
      </template>
    </van-cell>
    <button class="btn" @click="backLogin">退出登录</button>
  </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
let { proxy } = getCurrentInstance();
onMounted(() => {
  getInit();
});
const router = useRouter();
let initList = ref([]);
let checked = ref(false);
/* 返回上一级 */
const onClickLeft = () => {
  router.go(-1);
};
/* 默认数据请求 */
const getInit = async () => {
  const res = await proxy.$API.showoneApi({ id: localStorage.getItem("id") });
  console.log(res);
  initList.value = res.data.data;
  localStorage.setItem("oldDel", initList.value.tel);
};
/* 跳转安全认证 */
const goAqrz = () => {
  router.push("./Aqrz");
};
/* 清除登录 */
const backLogin = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("url");
  localStorage.removeItem("token");
  router.push("./my");
};
/* 跳转设置密码 */
const goupPassword = () => {
  router.push("./upPassword");
};
</script>

<style lang="scss" scoped>
.setting {
  padding: 0 30px;
  //   box-sizing: border-box;
  .btn {
    display: block;
    width: 100%;
    color: red;
    background: #fff;
    padding: 20px 0;
    border: 1px solid red;
  }
}
:deep(.van-nav-bar__title) {
  // --van-nav-bar-arrow-size: 35px;
  font-size: 35px;
  font-weight: 600;
}
:deep(.van-badge__wrapper) {
  color: #111;
}
:deep(.van-cell) {
  border-bottom: 1px #eee solid;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
