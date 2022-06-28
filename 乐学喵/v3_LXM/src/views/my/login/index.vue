<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="$router.back()" />

    <div class="logoBox">
      <img src="https://wap.lexuemiao.com/img/logo@2x.a4702f31.png" alt="" />
    </div>
    <van-cell-group inset class="form">
      <van-field
        v-model="data.loginParams.mebio"
        center
        clearable
        left-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUNENEI2RDQ4NDBGMTFFOUI3MjRGMEQzNzk0QTA3OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUNENEI2RDU4NDBGMTFFOUI3MjRGMEQzNzk0QTA3OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0Q0QjZEMjg0MEYxMUU5QjcyNEYwRDM3OTRBMDc5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0Q0QjZEMzg0MEYxMUU5QjcyNEYwRDM3OTRBMDc5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrkdbnYAAAHUSURBVHja7Ji/SwMxFMevvat2sJWiIu0kuBdnR3Ho5O6mq6Pgoq4iiChO7iL4BzgUEcTJWe0ojtKhoLZYK1aN38ArhKN5d/FS6pAHH14bkpdvfjTNS0oI4emsdZAqw22AJZD3ktk3qILd/Lq40VVK6QRBzCzcLRijomcQyDaGQgSJKShlZYiq9ascMIGOSMwZ2AKNiPqcfYEpsAOWwSFYNJ2hLgkoYTR1z4IhZgnuSc4YYvYdXJppH9B0f3j2rBfL11VIR6y9tIxFQZlQbCNBQzEnyAlygpwgJ8gJcoKcoH8kqHeZb1vs7z0U2+iS/0MNi7gL1xNc8NWL/rQS21jQC5gANQrmW8jLAiW2saDevTc7gK0i/iKoQA3nQJ257KuZSZbZHzKtKoK7UNIYW5BPnT0gh+pYysvaUWlQnCXLgQ7TSQXumL6uQXyViZkbaBoEMaNwp2CGOEHZyDAPxnBmm3hp4xyMXV0FLM8n3CpoglewQmUes7HZgzEd42Bkf/YQcAk3KcHnq4gJyEYNktvU12AB7GNfbDPPMQJCmrSnxjWjV59jpF1ol4V5jinTmaGe3L6X/MHqTZ5tGMSjkSASNQ+3CSoW/jpa4BzsQcy9rtKvAAMAZ+qJfVLcRQEAAAAASUVORK5CYII="
        placeholder="请输手机号"
      >
        <template #button>
          <van-button
            @click="getCode"
            size="mini"
            color="#f15a24"
            type="primary"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <van-field
        v-model="data.loginParams.smsCode"
        left-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0E2RjAyOUQ4NDEwMTFFOUI3MjRGMEQzNzk0QTA3OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0E2RjAyOUU4NDEwMTFFOUI3MjRGMEQzNzk0QTA3OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTZGMDI5Qjg0MTAxMUU5QjcyNEYwRDM3OTRBMDc5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTZGMDI5Qzg0MTAxMUU5QjcyNEYwRDM3OTRBMDc5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuseJRUAAAKISURBVHja7JjtcYJAEIYx4+/EDoIVhA6kg5AKxA4wFZgGElIBWgGmArEDrEBLIGnA7GZeMjuXu+MAdfyRm1mNcFme29uvY3A8Hr1rGjfelY2h/PH1OuiqJ+aP2+fj8hosxBAZCy0o66tsIH2opYVGJDlJSLLDtQeSguSJrFVd0kIRyR4wH/iWf+9pcdElgHySDSzD5pwDjq1RkVUiXON7OUFtSPxzAPnwk9oqW5KAJFUnElSKe1thrcwVzOZDrHSCCApwjR+ygJ94GhhPidoQ8ye4VCIItjS3dAHih0+xMjlWUFTYVqcCKWC1bjlY30qmi6Hm/+uoKYRUfUKZHvijh8ASEQC1vBsTI40DvtnM61NnYaQC1rtGFObqYk1OHVygSgQuUVZeunZhO41A1aktRFsTGPJR0FhcMXYoCyeBQSIdGErPziUxViJv9IEZIZkyTEhbc1CmTHTRqwMqRHbuA8OWGQOmVO77yrOsQKVljxPUrs4wiu6yDVBkSJp53ZB1hJG6nYAOcLaJoTPcwTdijZNusHobzG810PiVMTEW8KFA4/ChBkrCzGwwiLx7UyUwAaXCZ7wGqESBaeqrE9H6tmo/lqjOY1Hj1C0q0LZ6LjCIrj0qfNy2QVuKQutZLMVt68y0YmUsGnRagQr0Qbr+SEJFLjDoiaawzqFrC8v7/Uny1qecIB28QVfSp6euRAvb58y1hI6o6Xjk0uSv0dVFXaDIOgzzSPKithqu1d60dSORd2YtYGq/WbQ+27uc38UWzk1NP5JfhnnGED/VUTpG4ryDb6wEWB1JMRw4JphWvXnXs72PXDJVDge+ODYtbOF9jpcNNUAsqjdbI+36ouEP0P8bNM34FmAAUAkQEXf3HKoAAAAASUVORK5CYII="
        placeholder="请输入验证码"
      />
      <van-field
        v-model="data.loginParams.imgCode"
        center
        clearable
        left-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0E2RjAyOUQ4NDEwMTFFOUI3MjRGMEQzNzk0QTA3OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0E2RjAyOUU4NDEwMTFFOUI3MjRGMEQzNzk0QTA3OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQTZGMDI5Qjg0MTAxMUU5QjcyNEYwRDM3OTRBMDc5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTZGMDI5Qzg0MTAxMUU5QjcyNEYwRDM3OTRBMDc5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuseJRUAAAKISURBVHja7JjtcYJAEIYx4+/EDoIVhA6kg5AKxA4wFZgGElIBWgGmArEDrEBLIGnA7GZeMjuXu+MAdfyRm1mNcFme29uvY3A8Hr1rGjfelY2h/PH1OuiqJ+aP2+fj8hosxBAZCy0o66tsIH2opYVGJDlJSLLDtQeSguSJrFVd0kIRyR4wH/iWf+9pcdElgHySDSzD5pwDjq1RkVUiXON7OUFtSPxzAPnwk9oqW5KAJFUnElSKe1thrcwVzOZDrHSCCApwjR+ygJ94GhhPidoQ8ye4VCIItjS3dAHih0+xMjlWUFTYVqcCKWC1bjlY30qmi6Hm/+uoKYRUfUKZHvijh8ASEQC1vBsTI40DvtnM61NnYaQC1rtGFObqYk1OHVygSgQuUVZeunZhO41A1aktRFsTGPJR0FhcMXYoCyeBQSIdGErPziUxViJv9IEZIZkyTEhbc1CmTHTRqwMqRHbuA8OWGQOmVO77yrOsQKVljxPUrs4wiu6yDVBkSJp53ZB1hJG6nYAOcLaJoTPcwTdijZNusHobzG810PiVMTEW8KFA4/ChBkrCzGwwiLx7UyUwAaXCZ7wGqESBaeqrE9H6tmo/lqjOY1Hj1C0q0LZ6LjCIrj0qfNy2QVuKQutZLMVt68y0YmUsGnRagQr0Qbr+SEJFLjDoiaawzqFrC8v7/Uny1qecIB28QVfSp6euRAvb58y1hI6o6Xjk0uSv0dVFXaDIOgzzSPKithqu1d60dSORd2YtYGq/WbQ+27uc38UWzk1NP5JfhnnGED/VUTpG4ryDb6wEWB1JMRw4JphWvXnXs72PXDJVDge+ODYtbOF9jpcNNUAsqjdbI+36ouEP0P8bNM34FmAAUAkQEXf3HKoAAAAASUVORK5CYII="
        placeholder="请输验证码"
      >
        <template #right-icon>
          <img
            @click="getImgCodes"
            class="imgCode"
            :src="data.imgData.url?.img"
            alt=""
          />
        </template>
      </van-field>
    </van-cell-group>

    <div class="btnbox">
      <van-button
        @click="enroll"
        class="btn"
        size="normal"
        color="#f15a24"
        type="primary"
        >注册</van-button
      >
    </div>
    <div class="tishi">
      <p>未注册的手机号码将自动注册</p>
      <p @click="goEnroll">密码登录</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const { proxy } = getCurrentInstance();
const router = useRouter();

onMounted(() => {
  getImgCode();
});
const data = reactive({
  /* 点击注册传值 */
  loginParams: {
    mebio: "",
    smsCode: "",
    imgCode: "",
  },
  /* 图形码 */
  imgData: [],
  enrollList: [],
});
/* 获取手机号验证码 */
const getCode = async () => {
  const res = await proxy.$API.getyzApi({
    mobile: data.loginParams.mebio,
    sms_type: "login",
  });
};
/* 获取图形验证码 */
const getImgCode = async () => {
  const res = await proxy.$API.getImgCode();
  data.imgData = res.data.data;
};
/* 点击切换图形验证码 */
const getImgCodes = () => {
  getImgCode();
};
/* 注册 */
const enroll = async () => {
  const res = await proxy.$API.getLoginApi({
    mobile: data.loginParams.mebio,
    sms_code: data.loginParams.smsCode,
    captcha: data.loginParams.imgCode,
    user_pass: "000000",
    device_type: "2",
    device_id: "1",
  });
  let { is_new_user } = res.data.data;
  console.log(res);
  /* 应该是新用户 */
  if (is_new_user == 1) {
    router.push(
      `./updataPassword?sms_code=${data.loginParams.smsCode}&mobile=${data.loginParams.mebio}`
    );
  } else if (is_new_user == 0) {
    let { remember_token, user_nickname, avatar, real_name, sex, id } =
      res.data.data;
    if (res.data.code == 200) {
      localStorage.setItem("token", remember_token);
      localStorage.setItem("name", user_nickname);
      localStorage.setItem("url", avatar);
      localStorage.setItem("mobile", real_name);
      localStorage.setItem("sex", sex);
      localStorage.setItem("id", id);
    }
    router.push("./my");
  }
};
/* 跳转登录 */
const goEnroll = () => {
  router.push("./enroll");
};
</script>
<style lang="scss" scoped>
.logoBox {
  padding-top: 100px;
  img {
    display: block;
    margin: auto;
    width: 340px;
    height: 110px;
    margin-bottom: 100px;
  }
}
.form {
  img {
    width: 180px;
    height: 60px;
  }
}
.btnbox {
  margin-top: 80px;
  padding: 0 40px;
  box-sizing: border-box;
  .btn {
    width: 100%;
  }
}
.tishi {
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  font-size: 12px;
  color: #ccc;
}
.van-nav-bar {
  color: #111;
}
:deep(.van-badge__wrapper) {
  color: #111;
}
</style>
