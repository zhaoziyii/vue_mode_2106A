<template>
  <div class="Detail">
    <div class="detailTop">
      <span class="left" @click="Goback">
        <van-icon name="arrow-left" size="20" />
      </span>
      <h3>课程详情</h3>
      <div>
        <span>
          <van-icon
            v-if="scShow == 0"
            @click.stop="collect"
            name="star-o"
            size="20"
          />
          <van-icon
            v-if="scShow == 1"
            @click.stop="collect"
            name="star"
            size="20"
          />
        </span>
        <van-icon @click.stop="shartFn" name="share-o" size="20" />
        <van-popup v-model:show="shartFnShow"
          ><img :src="twoImgs" alt=""
        /></van-popup>
      </div>
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
        <p>共{{ detailInfo.course_count }}个课时|直播课</p>
        <div class="xrs">
          <i v-if="detailInfo.a_stock > 0">限{{ detailInfo.a_stock }}人 </i>

          <i> 已报名{{ detailInfo.get_order_count }}人</i>
        </div>
        <div class="teacher">
          <div v-for="(item, index) in detailInfo.teacher" :key="index">
            <img :src="item.avatar" alt="" />
            <span>{{ item.teacher_name }}</span>
          </div>
        </div>
      </div>

      <div class="hr"></div>
      <div class="teacherPiepare">
        <p>课前准备</p>
        <div class="teacherPiepareButtom">
          <p>{{ detailInfo.teacher_wechat_guided_words }}</p>
          <div>联系方式</div>
        </div>
      </div>

      <div class="hr"></div>
      <van-tabs v-model:active="active">
        <van-tab title="课程详情">
          <div class="rich_text" v-html="detailInfo.course_details"></div>
        </van-tab>

        <van-tab class="ap" title="课程安排">
          <van-tabs v-model:active="active1" type="card">
            <!-- 章节分类 -->
            <van-tab title="章节分类">
              <van-collapse v-model="activeNames" accordion>
                <van-collapse-item
                  v-for="(item, index) in detailData.course_periods"
                  :key="index"
                  :title="item.course_title"
                  :name="item.id"
                >
                  <van-collapse v-model="activeNamess" accordion>
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
                  </van-collapse>
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

        <van-tab title="资料下载"> </van-tab>
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
  <div class="footer">
    <div class="Footleft">
      <div class="FootleftSmall">
        <p style="color: red">
          <span v-if="detailInfo.price !== 0">￥</span>
          {{ detailInfo.price == 0 ? "免费" : detailInfo.price / 100 }}
        </p>
        <s v-if="detailInfo.vip_price !== 0"
          >￥{{
            detailInfo.vip_price == 0 ? "免费" : detailInfo.vip_price / 100
          }}.00</s
        >
      </div>
      <div class="FootleftIcon">
        <van-icon color="#b0bcd2" size="20" name="service-o" />
        <p>客服</p>
      </div>
    </div>
    <div class="Footright" @click="goarrange">
      {{ detailInfo.vip_price == 0 ? "立即学习" : "立即报名" }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "../../stores/counter.js";
import { Toast } from "vant";
import QRCode from "qrcode";

const store = useCounterStore();
const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
let active = ref(0);
let active1 = ref(0);
let { basis_id } = route.query;

/* 要传的Id */
let basisId = ref("");
basisId.value = basis_id;
/* 详情数据 */
let detailData = ref([]);
/* 详情 */
let detailInfo = ref([]);
/* 手风琴 */
const activeNames = ref("1");
const activeNamess = ref("2");
/* 课程评价 */
const kcpj = ref([]);
/* 收藏show */
const scShow = ref(0);
/* 二维码地址 */
const twoImgs = ref("");
/* 二维码弹框 */
const shartFnShow = ref(false);
onMounted(() => {
  getInitDetail();
  sppj();
});
//获取详情
const getInitDetail = async () => {
  let token = localStorage.getItem("token");
  let id;
  if (token) {
    id = 1;
  } else {
    id = 0;
  }
  const res = await proxy.$API.getInitDetailApi({
    basis_id: basisId.value,
    id: id,
  });
  detailData.value = res.data.data;
  detailInfo.value = res.data.data.info;

  scShow.value = res.data.data.info.is_collect;
  console.log("detailData::", res.data.data.info.is_collect);
  // console.log("detailInfo::", detailInfo.value);
};
const Goback = () => {
  router.go(-1);
};
/* 获取评价 */
const sppj = async () => {
  let res = await proxy.$API.getInitDetailPjApi({
    course_id: basisId.value,
    type: "1",
  });
  kcpj.value = res.data.data;
  // console.log(kcpj.value);
};
/* 时间戳 */
const time = (val) => {
  return new Date(val * 1000).toLocaleDateString();
};
/* 添加收藏 */
const collect = async () => {
  const res = await proxy.$API.collectApi({
    basis_id: basisId.value,
    type: 1,
  });
  Toast.success(res.data.msg);
  console.log(res);
  if (res.data.code == 200) {
    scShow.value = res.data.data.is_collect;
  } else {
    return false;
  }
};
/* 分享 */
const shartFn = () => {
  let urls = location.href;
  QRCode.toDataURL(urls, function (err, url) {
    twoImgs.value = url;
    console.log(url);
  });
  shartFnShow.value = true;
};
/* 立即报名 */
const goarrange = async () => {
  // const res = proxy.$API.mflqApi();
  // constants.log(res);
  if (detailInfo.value.vip_price <= 0) {
    // console.log("11");
    router.push(`./arrange?id=${basisId.value}`);
  } else {
    // const res = await proxy.$API.ljgmApi();
    Toast("暂无购买权限哦");
  }
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
    padding: 0 20px;
    height: 88px;
    .left {
      display: inline-block;
      width: 100px;
    }
    div {
      .van-icon {
        margin-right: 20px;
      }
    }
  }
  nav {
    width: 100%;
    height: calc(100vh - 188px);
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
      margin-top: 5px;
    }
    p {
      font-size: 26px;
      color: #a5a1a1;
      font-weight: 500;
      margin-top: 30px;
    }
    .xrs {
      display: flex;
      i {
        display: block;
        font-size: 26px;
        color: #a5a1a1;
        margin-top: 20px;
      }
    }

    .teacher {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 28px;
      color: #707070;
      margin: 30px 0;
      //   flex-wrap: wrap;
      overflow: hidden;
      //   text-overflow: ellipsis;
      //   white-space: nowrap;
      div {
        width: 33%;
        display: flex;
        align-items: center;
        // margin-right: 20px;
        img {
          width: 50px;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
    }
  }
  .hr {
    width: 100%;
    height: 30px;
    background: #f6f6f6;
  }
  .teacherPiepare {
    padding: 0 40px;
    box-sizing: border-box;
    p {
      font-size: 35px;
      margin-top: 20px;
    }
    .teacherPiepareButtom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      P {
        font-size: 28px;
      }
      div {
        margin-top: 20px;
        padding: 15px 25px;
        color: #fff;
        border-radius: 30px;
        font-size: 25px;
        background: #ef8a1f;
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
