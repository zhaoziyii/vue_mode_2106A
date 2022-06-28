<template>
  <div class="Detail">
    <div class="detailTop">
      <span class="left" @click="Goback">
        <van-icon name="arrow-left" size="20" />
      </span>
      <h3>课程安排</h3>
      <div></div>
    </div>
    <!-- 中心区域 -->
    <nav>
      <!-- 轮播图 -->
      <div class="banner">
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item v-for="item in detailData.banner">
            <video
              v-if="item.type == 2"
              :src="item.banner_src"
              controls="true"
              preload="auto"
            ></video>
            <img :src="item.banner_src" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- title -->
      <div class="detailTitle">
        <h4>{{ detailInfo.title }}</h4>
      </div>

      <div class="hrs"></div>
      <div class="teacherPiepare">
        <p>课前准备</p>
        <div class="teacherPiepareButtom">
          <div class="div">
            <p>{{ wechat_info.guided_words }}</p>
            <div @click="lxfs">关注公众号</div>
          </div>
          <div class="div">
            <p>{{ detailInfo.teacher_wechat_guided_words }}</p>
            <div @click="lxfs">联系方式</div>
          </div>
        </div>
      </div>
      <!-- 弹出层 -->
      <van-popup v-model:show="show" closeable>
        <div class="popupTi">{{ PopupList.sign_guided_words }}</div>
        <img class="popupImg" :src="PopupList.code_url" alt="" />
        <p class="popupbt">{{ PopupList.explain1 }}</p>
        <button @click="ljlx">立即联系老师</button>
      </van-popup>
      <div class="hr"></div>
      <van-tabs v-model:active="active">
        <van-tab class="ap" title="课程安排">
          <van-tabs v-model:active="active1" type="card">
            <!-- 章节分类 -->
            <van-tab title="章节分类">
              <van-collapse v-model="activeNames">
                <van-collapse-item
                  v-for="(item, index) in detailData.course_periods"
                  :key="index"
                  :title="item.course_title"
                  :name="item.id"
                >
                  <van-collapse-item
                    v-for="(it, i) in item.list"
                    :title="it.title"
                    :name="it.id"
                  >
                    <div
                      style="margin-bottom: 20px"
                      v-for="(dom, id) in it.child"
                    >
                      {{ dom.periods_title }}
                    </div>
                  </van-collapse-item>
                </van-collapse-item>
              </van-collapse>
            </van-tab>
            <!-- 时间排序 -->
            <van-tab title="时间排序">
              <div v-for="(item, index) in detailData.course_periods">
                <div v-for="(it, ind) in item.list">
                  <div style="margin-bottom: 20px" v-for="(dom, i) in it.child">
                    {{ i + 1 }}:{{ dom.periods_title }}
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="课程评价">
          <div v-for="(item, index) in kcpj.list">
            <div class="pjBox">
              <div class="left">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="right">
                <h3>{{ item.user_nickname }}</h3>
                <img
                  src="../../assets/Snipaste_2022-06-09_16-43-57.png"
                  alt=""
                />
                <p>{{ item.content }}</p>
                <p>{{ time(item.created_at) }}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Toast } from "vant";
const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
let active = ref(0);
let active1 = ref(0);
let show = ref(false);
let { basis_id } = route.query;

/* 要传的Id */
let basisId = ref("");
basisId.value = basis_id;
/* 详情数据 */
let detailData = ref([]);
/* 详情 */
let detailInfo = ref([]);
/* 手风琴 */
const activeNames = ref(["1"]);
/* 课程评价 */
const kcpj = ref([]);
/* 弹出list */
const PopupList = ref([]);
const wechat_info = ref([]);
onMounted(() => {
  getInitDetail();
  getgetWechatInfo();
});
/* 获取 */
const getgetWechatInfo = async () => {
  const res = await proxy.$API.getWechatInfoApi({ id: route.query.id });
  PopupList.value = res.data.data.teacher_wechat_info;
  wechat_info.value = res.data.data.wechat_info;
  console.log(wechat_info.value);
  console.log(PopupList.value);
};
//获取详情

const getInitDetail = async () => {
  let id = 0;
  let token = localStorage.getItem("token");
  if (token) {
    id = 1;
  } else {
    id = 0;
  }
  if (token) {
    const res = await proxy.$API.getInitDetailApi({
      basis_id: route.query.id,
      id: id,
    });
    detailData.value = res.data.data;
    detailInfo.value = res.data.data.info;
  } else {
    return false;
  }
};
/* 联系方式 */
const lxfs = () => {
  show.value = true;
};
/* 立即联系老师 */
const ljlx = () => {
  Toast("请在浏览器打开");
};
const Goback = () => {
  router.go(-1);
};

/* 时间戳 */
const time = (val) => {
  return new Date(val * 1000).toLocaleDateString();
};
</script>

<style lang="scss" scoped>
.Detail {
  width: 100%;
  height: 100vh;
  .detailTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 20px;
    height: 88px;
    .left {
      display: inline-block;
      width: 100px;
    }
    div {
      width: 100px;
      .van-icon {
        margin-right: 20px;
      }
    }
  }
  nav {
    width: 100%;
    height: calc(100vh - 86px);
    overflow: auto;
  }
  .banner {
    width: 100%;
    .my-swipe {
      width: 100%;
      video {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
  .detailTitle {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    h4 {
      margin: 25px;
    }
  }
  .hr {
    width: 100%;
    height: 30px;
    background: #f6f6f6;
  }
  .hrs {
    width: 100%;
    height: 10px;
    background: #f6f6f6;
  }
  .teacherPiepare {
    padding: 20px 50px;
    box-sizing: border-box;
    p {
      font-size: 35px;
      margin-top: 20px;
    }
    .teacherPiepareButtom {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px 0;
      .div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
        padding: 10px 0 20px 0;
        P {
          font-size: 28px;
        }
        div {
          width: 177px;
          padding: 15px 5px;
          text-align: center;
          color: #fff;
          border-radius: 30px;
          font-size: 25px;
          background: #ef8a1f;
        }
      }
    }
  }
}
.footer {
  position: fixed;
  border: 1px solid #b0bcd2;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  .Footleft {
    width: 55%;
    height: 100%;
    display: flex;
    .FootleftSmall {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 38px;
      }
      s {
        font-size: 26px;
        color: #b0bcd2;
      }
    }
    .FootleftIcon {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #b0bcd2;
      p {
        font-size: 26px;
        color: #b0bcd2;
      }
    }
  }
  .Footright {
    width: 45%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 98px;
    background: #f15a24;
  }
}
:deep(.van-popup) {
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    margin-top: -30px;
    margin-right: -15px;
  }
  .popupbt {
    color: #ef8a1f;
  }
  button {
    border: none;
    margin: 20px 0;
    padding: 10px 50px;
    border-radius: 30px;
    background: #ef8a1f;
    color: #fff;
    font-size: 25px;
  }
}
.popupTi {
  width: 500px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
}
.popupImg {
  width: 350px;
  height: 350px;
}
#van-tab-5,
#van-tab-2,
#van-tab-3,
#van-tab-4 {
  padding: 0 50px !important;
  box-sizing: border-box;
}
.rich_text {
  width: 100%;

  width: 100%;
  :deep(img) {
    width: 100%;
  }
}
.ap {
  margin-top: 40px;
  :deep(.van-tabs__nav) {
    border: none;
  }
  :deep(#van-tabs-6-0) {
    border: 1px solid #ffc585;
    color: #ffc585;
    border-radius: 30px !important;
  }

  :deep(#van-tabs-6-1) {
    border: 1px solid #ffc585;
    color: #ffc585;
    border-radius: 30px !important;
  }
  :deep(#van-tab-7) {
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 40px;
  }
  :deep(#van-tab-8) {
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 40px;
  }
}
.pjBox {
  width: 100%;
  display: flex;
  margin-top: 30px;
  .left {
    margin-right: 20px;
    img {
      width: 50px;
    }
  }
  .right {
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 28px;
    }
  }
}
</style>
