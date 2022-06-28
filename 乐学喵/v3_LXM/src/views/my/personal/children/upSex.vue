<template>
  <div class="upSex">
    <van-nav-bar
      title="修改个人信息"
      left-arrow
      @click-left="router.go(-1)"
      right-text="保存"
      @click-right="isOk"
    />
    <div class="sex" @click="upsexs(0)">
      <span> 男 </span>
      <i v-if="index == 0"><van-icon name="success" /></i>
    </div>
    <div class="sex" @click="upsexs(1)">
      <span> 女 </span>
      <i v-if="index == 1"><van-icon name="success" /></i>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, reactive } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
let { proxy } = getCurrentInstance();
let index = ref(0);
const upsexs = async (val) => {
  index.value = val;
};
const isOk = async () => {
  const res = await proxy.$API.upDateHeadApi({
    id: localStorage.getItem("id"),
    sex: index.value,
  });
  if (res.data.code == 200) {
    Toast(res.data.msg);
  }
  router.push("./personal");
};
</script>
<style lang="scss" scoped>
.upSex {
  width: 100%;
}
:deep(.van-nav-bar__title) {
  // --van-nav-bar-arrow-size: 35px;
  font-size: 35px;
  font-weight: 600;
}
:deep(.van-nav-bar__text) {
  // --van-nav-bar-arrow-size: 35px;
  color: #111;
  font-weight: 500;
}
:deep(.van-badge__wrapper) {
  color: #111;
}
.sex {
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
}
</style>
