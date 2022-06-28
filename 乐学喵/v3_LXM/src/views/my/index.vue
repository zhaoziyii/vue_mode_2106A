<template>
  <div class="my">
    <div class="info">
      <div class="rightimg">
        <img
          @click="gosetting"
          class="setting"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEU0M0I2QkE4NDEyMTFFOUI3MjRGMEQzNzk0QTA3OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEU0M0I2QkI4NDEyMTFFOUI3MjRGMEQzNzk0QTA3OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTQzQjZCODg0MTIxMUU5QjcyNEYwRDM3OTRBMDc5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTQzQjZCOTg0MTIxMUU5QjcyNEYwRDM3OTRBMDc5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmj5UZwAAALwSURBVHja7FrtbdswEE2K/g83iDaoNjA3sDYoN4g2iDdIN5A2qDuBlQnMTCB1AqsTqCRwQg8H0jySYgCjPuBgQeHHPYq693jK47IsD7dsXx5u3O4A7gAy7esGYwjje7j+ZXxm9NkZr6H9lDW7zUIZ/t34Zfln9rq+0l4YP5H2r3A/KYbUwBvj4+K3F0cfC+zsaX+BxSgOoCYraG0wLuFvM7o/wupaMB3p0xuv4HchfWQpAIJslwmeBG5TASCfWYCK9JGOPlUJABJNcAi0VSSoCfqIwLZcreXGFZOFNLoOZZoePNV0CR6wQb/DtSyQ0mv4/WN8KEVkM8r9pUyXZGLxCeT6XAqADf5byioxbWXkCnxzAC16An0BAEfY/9betpYSCqW4I7OPzeU7cG5eP6B5ulwesMy6J8w7MXSL8kiGM1MuaEefXQwASRh3Nc1YyX4JW8dgfB+bKw4A2nliMC8NXsNkNbiCcWK2hyJPYxV9QQBUcMXKjJ4JUkZosNank1wvXuwEOLDQOyKQYu0jxvfGRdNolZgCG5QK5wCTryl4n8ARWHIEeWCOmOApguB0JqsLLoCUCaqN2nx6VeIDHdZDJkmfLLFHAQyJK9Wj4GTgXdklyBHp3dqON35G59M3Jnvi7HLxHOpbRJATsxKxh3M1ZvYgD7jYdHScf13Sgx7qf4KP5FxcM8ZyyZGBA8CuzA9oPJEBWsbE+oqM0IzglaMQMPiIlcuyOKiGWTfqYeJ18oZZtrlWwUiuSggEYsyppAX8FLHNssoqqkDwdcr4MTxgU+zvglWJxpGWNycyXYJNib3felXiqSSA54JViRmpTVECQI22TqhyZtu9Gj+BvzC23dHzPmz2gaNmMLMA+eEz38cMSYoHzVLo+wCVGSd0QnLR/+A4Y58RiAqkBmXrol9opENidKSScSS0X8E9/AQ7R/Egml9yiKcl4o1DQq3no8chld1z2VPA5BP61MTRSRoC73NlyeP9fyXuAP5zAH8FGAA82q2hfqudvgAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div class="avatr">
        <img
          @click="gopersonal"
          :src="
            user_name && user_url
              ? show_url
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI4QkRDMThBREY0MjExRTg5RUQ2QUM5QjA2QkVFM0E5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI4QkRDMThCREY0MjExRTg5RUQ2QUM5QjA2QkVFM0E5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjhCREMxODhERjQyMTFFODlFRDZBQzlCMDZCRUUzQTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjhCREMxODlERjQyMTFFODlFRDZBQzlCMDZCRUUzQTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7itKCPAAANnElEQVR42uxdW4xV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'
          "
        />
        <div class="dl" v-if="!user_name && !user_url">
          <h3 @click="goLogin(1)">注册/</h3>
          <h3 @click="goLogin(2)">登录</h3>
        </div>
        <div style="margin-top: 20px" v-if="user_name && user_url">
          {{ show_name }}
        </div>
      </div>
    </div>

    <van-grid class="nav" :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in data.navData" :key="index">
        <van-icon :name="item.icon" size="20" />
        <div class="name">{{ item.name }}</div>
        <p class="desc">{{ item.desc }}</p>
      </van-grid-item>
    </van-grid>

    <van-cell title="我的收藏" icon="star-o">
      <template #right-icon>
        <van-icon name="arrow" class="search-icon" />
      </template>
    </van-cell>
    <van-cell title="我的会员" icon="diamond-o">
      <template #right-icon>
        <van-icon name="arrow" class="search-icon" />
      </template>
    </van-cell>
    <van-cell style="margin-bottom: 10px" title="我的优惠券" icon="coupon-o">
      <template #right-icon>
        <van-icon name="arrow" class="search-icon" />
      </template>
    </van-cell>
    <van-cell title="我的消息" icon="comment-o">
      <template #right-icon>
        <van-icon name="arrow" class="search-icon" />
      </template>
    </van-cell>
    <van-cell title="问题反馈" icon="edit">
      <template #right-icon>
        <van-icon name="arrow" class="search-icon" />
      </template>
    </van-cell>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const { proxy } = getCurrentInstance();
const router = useRouter();
let user_url = ref("");
let user_name = ref("");
let show_name = ref("");
let show_url = ref("");
onMounted(() => {
  getDetailList();
  user_name.value = localStorage.getItem("name");
  user_url.value = localStorage.getItem("url");
});
const data = reactive({
  navData: [
    { icon: "logistics", name: "我的订单", desc: "买课发快递" },
    { icon: "coupon-o", name: "兑换课程", desc: "兑换码兑换课程" },
    { icon: "location-o", name: "地址管理", desc: "收货地址" },
  ],
});
/* 获取信息 */
const getDetailList = async () => {
  let token = localStorage.getItem("token");
  if (token) {
    const res = await proxy.$API.showoneApi({ id: localStorage.getItem("id") });
    show_url.value = res.data.data.avatar;
    show_name.value = res.data.data.user_nickname;
  }
};
const goLogin = (i) => {
  if (i == 1) {
    router.push("./login");
  } else if (i == 2) {
    router.push("./enroll");
  }
};
/* 去设置 */
const gosetting = () => {
  if (!user_name && !user_url) {
    router.push("./enroll");
  } else {
    router.push("./setting");
  }
};
/* 跳个人中心 */
const gopersonal = () => {
  if (localStorage.getItem("token")) {
    router.push("./personal");
  }
};
</script>
<style lang="scss" scoped>
.my {
  background-color: #f7f7f7;
  // background-color: #eee;
  height: 100vh;
  .info {
    width: 100%;
    height: 400px;
    // background: url("https://wap.lexuemiao.com/img/Teacher\ details.2cac6a5d.png");
    background: url("https://wap.lexuemiao.com/img/user_bg.dd455109.png");
    background-size: 100% 100%;
    position: relative;
    color: #fff;
    .setting {
      width: 50px;
      height: 50px;
      position: absolute;
      right: 40px;
      top: 40px;
    }
    .dl {
      display: flex;
      margin-top: 20px;
    }
    .avatr {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      img {
        margin-top: 80px;
        width: 150px;
        height: 150px;
      }
      h4 {
        font-weight: 500;
        font-size: 18px;
        color: #fff;
      }
    }
  }
  .nav {
    margin-bottom: 20px;

    .name {
      margin: 0;
      padding: 0;
      font-size: 13px;
      margin-top: 5px;
    }
    .desc {
      margin: 0;
      padding: 0;
      color: #ccc;
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
