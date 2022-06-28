<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="router.go(-1)" />

    <!-- 头像 -->
    <a href="../../../../public/touxiang.html">
      <van-cell class="t1" title="头像" is-link @click="upHear">
        <template #value>
          <img :src="info.avatar" alt="" />
        </template>
      </van-cell>
    </a>
    <!-- 昵称 -->
    <van-cell title="昵称" is-link @click="goNake">
      <template #value>
        <span class="custom-title">{{ info.user_nickname }}</span>
      </template>
    </van-cell>
    <!-- 手机号码 -->
    <van-cell title="手机号码">
      <template #value>
        <span class="custom-title">{{ info.tel }}</span>
      </template>
    </van-cell>
    <!-- 性别 -->
    <van-cell title="性别" is-link @click="goSex">
      <template #value>
        <span class="custom-title">{{ info.sex == 0 ? "男" : "女" }}</span>
      </template>
    </van-cell>
    <!-- 出生日期 -->
    <van-cell title="出生日期" is-link @click="udbirthday">
      <template #value>
        <span class="custom-title">{{ info.birthday }}</span>
      </template>
    </van-cell>
    <!-- 弹出层 -->
    <van-popup v-model:show="show" position="bottom">
      <!-- 日期 -->
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        @confirm="changeDate"
      />
    </van-popup>

    <!-- 地区 -->
    <van-cell title="地区" is-link @click="upcart">
      <template #value>
        <span class="custom-title"
          >{{ info.area_name }}/{{ info.city_name }}/{{
            info.province_name
          }}</span
        >
      </template>
    </van-cell>
    <!-- 弹出层 -->
    <van-popup v-model:show="show1" position="bottom">
      <!-- 地址 -->
      <van-area title="标题" :area-list="areaList" @confirm="upCart" />
    </van-popup>

    <!-- 年级 -->
    <van-cell title="年级" is-link @click="upNj">
      <template #value>
        <span class="custom-title">{{ info.grade_name }}</span>
      </template>
    </van-cell>
    <!-- 弹出层 -->
    <van-popup v-model:show="show2" position="bottom">
      <!-- 年级 -->
      <van-picker
        title="标题"
        :columns="columns"
        v-model:show="show2"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <!-- 报考院校 -->
    <van-cell title="报考院校" is-link>
      <template #value>
        <span class="custom-title">请选择</span>
      </template>
    </van-cell>
    <!-- 报考专业 -->
    <van-cell title="报考专业" is-link @click="gocareer">
      <template #value>
        <span class="custom-title">{{ info.major }}</span>
      </template>
    </van-cell>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import moment from "moment";
import { Toast } from "vant";
/* vant提供的地址 */
import { areaList } from "@vant/area-data";
const { proxy } = getCurrentInstance();
/* 日期的v-model */
let currentDate = ref([]);
/* 最小日期 */
let minDate = ref(new Date(1900, 0, 1));
let url = ref("");
let info = ref([]);
let show = ref(false);
let show1 = ref(false);
let show2 = ref(false);
let cartList = ref([]);
/* 年级 */
const columns = ref([
  "高一",
  "高二",
  "高三",
  "大一",
  "大二",
  "大三",
  "大四",
  "在职",
]);
onMounted(() => {
  url.value = localStorage.getItem("url");
  getInit();
});
const router = useRouter();
/* 默认数据 */
const getInit = async () => {
  const res = await proxy.$API.showoneApi({ id: localStorage.getItem("id") });
  info.value = res.data.data;
  console.log(info.value);
};
/* 弹出框 */
const udbirthday = () => {
  show.value = true;
};
/* 点击日期 */
const changeDate = async (value) => {
  let a = moment(value).format("YYYY-MM-DD");
  const res = await proxy.$API.upDateHeadApi({
    id: localStorage.getItem("id"),
    birthday: a,
  });
  if (res.data.code == 200) {
    show.value = false;
    getInit();
  }
};
const goNake = () => {
  router.push("./upmessage");
};
/* 点击地址 */
const upcart = () => {
  show1.value = true;
};
/* 点击确定 */
const upCart = async (value, index) => {
  console.log(value);
  value.forEach((item) => {
    cartList.value.unshift(item.code);
  });
  let area_id = cartList.value[2];
  let city_id = cartList.value[1];
  let province_id = cartList.value[0];
  await proxy.$API.upDateHeadApi({
    area_id: area_id,
    city_id: city_id,
    province_id: province_id,
    id: localStorage.getItem("id"),
  });
  show1.value = false;
  console.log(cartList.value);
  getInit();
};

/* 年级弹出框 */
const upNj = () => {
  show2.value = true;
};
const onConfirm = async (value, index) => {
  await proxy.$API.upDateHeadApi({
    grade_id: index + 1,
    id: localStorage.getItem("id"),
  });
  show2.value = false;
  getInit();
};
const onCancel = () => {
  show2.value = false;
};
const upHear = () => {
  location.href("@public/touxiang.html");
};
/* 修改性别 */
const goSex = () => {
  router.push("./upSex");
};
/*  报考专业跳转 */
const gocareer = () => {
  router.push("./upcareer");
};
</script>

<style lang="scss" scoped>
:deep(.t1) {
  img {
    width: 50px;
    height: 50px;
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
:deep(.van-uploader) {
  width: 100%;
}
:deep(.van-uploader__input-wrapper) {
  width: 100% !important;
}
</style>
