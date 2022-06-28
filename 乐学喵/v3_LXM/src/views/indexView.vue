<template>
  <router-view></router-view>
  <ul class="footer">
    <li v-for="item in nav" @click="selectNav(item.title)">
      <img
        :src="isSelect === item.title ? item.url_one : item.url"
        :class="isSelect === item.title ? 'active' : ''"
        alt="item.title"
      />
      <p v-if="isSelect !== item.title">
        {{ item.title }}
      </p>
    </li>
  </ul>
</template>
<script setup>
import { RouterView, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const router = useRouter();
let isSelect = ref(["选课"]);
onMounted(() => {
  isSelect.value = sessionStorage.getItem("isSelect");
});

let nav = ref([
  {
    title: "选课",
    url: "../../public/tab_bars/xk.png",
    url_one: "../../public/tab_bars/xk_active.png",
  },
  {
    title: "我的课",
    url: "../../public/tab_bars/wdk.png",
    url_one: "../../public/tab_bars/wdk_active.png",
  },
  {
    title: "喵屋",
    url: "../../public/tab_bars/mw.png",
    url_one: "../../public/tab_bars/mw_active.png",
  },
  {
    title: "工具",
    url: "../../public/tab_bars/gj.png",
    url_one: "../../public/tab_bars/gj_active.png",
  },
  {
    title: "我的",
    url: "../../public/tab_bars/my.png",
    url_one: "../../public/tab_bars/my_active.png",
  },
]);
const selectNav = (title) => {
  isSelect.value = title;
  switch (title) {
    case "选课":
      router.push("/index");
      break;
    case "我的课":
      router.push("/wdk");
      break;
    case "喵屋":
      router.push("/miao");
      break;
    case "工具":
      router.push("/my");
      break;
    case "我的":
      router.push("/my");
      break;
  }
  sessionStorage.setItem("isSelect", isSelect.value);
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  background: #fff;
  li {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 5px;
    }
  }
}
.active {
  width: 80px !important;
  height: 80px !important;
}
</style>
