<template>
  <div>
    <van-nav-bar
      title="修改个人信息"
      left-arrow
      @click-left="router.go(-1)"
      right-text="保存"
      @click-right="isOk"
    />
    <div class="ind">
      <input type="text" v-model="user_nickname" />
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { proxy } = getCurrentInstance();
let user_nickname = ref("");
const isOk = async () => {
  const res = await proxy.$API.upDateHeadApi({
    id: localStorage.getItem("id"),
    major: user_nickname.value,
  });
  if (res.data.code == 200) {
    router.push("./personal");
  }
};
</script>
<style lang="scss" scoped>
.ind {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
:deep(.van-nav-bar__title) {
  // --van-nav-bar-arrow-size: 35px;
  font-size: 35px;
  font-weight: 600;
}
:deep(.van-nav-bar__text) {
  // --van-nav-bar-arrow-size: 35px;
  color: #111;
  font-weight: 600;
}
:deep(.van-badge__wrapper) {
  color: #111;
}
input {
  display: block;
  width: 100%;

  border: #ccc 1px solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 20px 0;
}
</style>
