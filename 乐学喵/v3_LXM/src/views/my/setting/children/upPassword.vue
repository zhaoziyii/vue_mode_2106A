<template>
  <div class="upPassword">
    <Header right="" title="设置密码" @goBack="router.back()"></Header>
    <div class="oldTel">
      <input type="text" placeholder="请输入手机号" />
      <button @click="getCode">获取验证码</button>
    </div>
    <div class="oldTel">
      <input type="text" placeholder="请输入验证码" />
    </div>
    <div class="oldTel">
      <input type="text" placeholder="请输入新密码" />
    </div>
    <div class="oldTel">
      <div class="red">为保障账号安全，建议您定期修改密码哦</div>
    </div>
    <div class="isok">
      <button>完成</button>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "../../../../components/Header.vue";
const { proxy } = getCurrentInstance();
const router = useRouter();
onMounted(() => {
  getCode();
});
const getCode = async () => {
  const res = await proxy.$API.getyzApi({
    mobile: localStorage.getItem("oldDel"),
  });
  console.log(res);
};
</script>

<style lang="scss" scoped>
.upPassword {
  width: 100%;
  height: 100%;
  font-size: 28px;
  .oldTel {
    padding: 30px 30px 0;
    box-sizing: border-box;
    color: #111;
    display: flex;
    justify-content: space-between;
    input {
      border: none;
    }
    button {
      padding: 12px 35px;
      border: none;
      color: #fff;
      background: #f15a24;
      font-size: 25px;
    }
    .red {
      color: red;
    }
  }
}
.isok {
  padding: 60px 30px;
  box-sizing: border-box;
  button {
    width: 100%;
    border: none;
    color: #fff;
    background: #f15a24;
    padding: 20px 0;
  }
}
</style>
