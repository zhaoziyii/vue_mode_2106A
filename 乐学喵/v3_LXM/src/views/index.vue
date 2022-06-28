<template>
  <div class="indexView">
    <van-action-sheet v-if="flag == 0" v-model:show="show" :closeable="false">
      <div class="content">
        <ul>
          <li
            @click="changeOne(item, index)"
            v-for="(item, index) in oneList"
            :key="index"
            :class="id == index ? 'active' : ''"
          >
            <span> {{ item.title }}</span>
            <span> {{ item.brief }}</span>
          </li>
        </ul>
      </div>
      <template class="a" #description>
        <span> <van-icon name="arrow-left" size="20" /></span>
        <span>选择考试</span>
        <span></span>
      </template>
    </van-action-sheet>
    <van-action-sheet v-if="flag == 1" v-model:show="show" :closeable="false">
      <div class="content">
        <ul>
          <li
            :class="rid == index ? 'active' : ''"
            @click="changetwo(index)"
            v-for="(item, index) in list"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <template class="a" #description>
        <span @click="flag = 0"> <van-icon name="arrow-left" size="20" /></span>
        <span>{{ twoTitle }}</span>
        <span></span>
      </template>
    </van-action-sheet>
    <van-action-sheet v-if="flag == 2" v-model:show="show" :closeable="false">
      <div class="content">
        <ul>
          <li
            :class="crid == index ? 'active' : ''"
            @click="changeThere(item, index)"
            v-for="(item, index) in thereList"
            :key="index"
          >
            {{ item.major_name }}
          </li>
        </ul>
      </div>
      <template class="a" #description>
        <span @click="flag = 1"> <van-icon name="arrow-left" size="20" /></span>
        <span>{{ twoTitle }}</span>
        <span @click="isOks" v-show="isOk" class="isOk">
          <i class="i">完成</i>
        </span>
      </template>
    </van-action-sheet>

    <div class="indexBox">
      <header>
        <span @click="clickTop"
          >{{
            store.locstorageList.length != 0
              ? store.locstorageList[0].one.title
              : "选择考试"
          }}
          ></span
        >
        <div>
          <img @click="goSearch" src="../assets/下载.png" alt="" />
          <img src="../assets/下载 (1).png" alt="" />
        </div>
      </header>
      <aside>
        <RouterView></RouterView>
        <!-- 点击切换 -->
        <van-tabs @click-tab="tab" v-model:active="active">
          <van-tab
            :name="item.id"
            v-for="(item, index) in tabsList"
            :key="index"
            :title="item.title"
          >
            <!-- 轮播图 -->
            <van-swipe
              class="my-swipe"
              :autoplay="3000"
              indicator-color="white"
            >
              <van-swipe-item
                @click="goDetail(item.link * 1)"
                v-for="(item, index) in bannerList"
                :key="index"
              >
                <img :src="item.banner_img" alt="" />
              </van-swipe-item>
            </van-swipe>
            <div class="swipeBottom">
              <span class="sp" v-for="(it, i) in item.child">{{
                it.title
              }}</span>
              <div class="ky">
                <img src="../assets/下载 (2).png" alt="" />
                <div>距离考研198天</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <!-- 近期公开课 -->
        <ol v-if="tabsListShow">
          <div class="olTop">
            <p class="p1">{{ getrecentOpens.model_name }}</p>
            <p @click="gofreeofChargeApi">查看全部></p>
          </div>

          <div class="b_box">
            <li
              class="li"
              v-for="(item, index) in getrecentOpens.course_list"
              :key="index"
              @click="goDetail(item.id)"
            >
              <div class="liBox">
                <li
                  class="lis"
                  v-for="(it, i) in item.teacher.slice(0, 1)"
                  :key="index"
                >
                  <img :src="it.avatar" alt="" />
                  <p class="pTitle">{{ item.title }}</p>
                  <div :class="[item.price == 0 ? 'green' : 'red', 'price']">
                    {{ item.price == 0 ? "免费" : "￥" + item.price / 100 }}
                  </div>
                  <p style="font-size: 5px; color: #f15a24; text-align: center">
                    {{ item.sales_num }}人已报名
                  </p>
                </li>
              </div>
            </li>
          </div>
        </ol>
        <!-- 内容 -->
        <ul>
          <li
            @click="goDetail(item.id)"
            v-for="(item, index) in contentList"
            :key="index"
          >
            <div class="contTop">{{ item.course_classify_title }}</div>
            <div class="contBoxs">
              <div class="contBoxsTitle">{{ item.title }}</div>
              <div class="label">
                <span v-for="(it, i) in item.course_label" :key="i">
                  <span>{{ it.label_name }}</span>
                </span>
              </div>
              <div class="teachers">
                <span
                  v-for="(it, i) in item.teacher.length > 3
                    ? item.teacher.splice(3)
                    : item.teacher"
                >
                  <img :src="it.avatar" alt="" />
                  <span>{{ it.teacher_name }}</span>
                </span>
              </div>
              <div class="contBoxsBottom">
                <span>{{ item.sales_num }}人已报名</span>
                <span :class="item.price == 0 ? 'green' : 'red'"
                  ><span v-if="item.price !== 0">￥</span
                  >{{ item.price > 0 ? item.price / 100 : "免费" }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </aside>
      <footer></footer>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance, reactive } from "vue";
import { useCounterStore } from "../stores/counter.js";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { Toast } from "vant";
const store = useCounterStore();
const { proxy } = getCurrentInstance();
const router = useRouter();
/* 第一次点击前的数据 */
let oneList = ref([]);
/* 传值ID */
let classify_id = ref(0);
/* vant组件弹出框的显示隐藏 */
let show = ref(false);
/* 显示第几个弹出框 */
let flag = ref(0);
/* 第一个弹框索引 */
let id = ref(-1);
/* 第二个弹框索引 */
let rid = ref(-1);
/* 第三个弹框索引 */
let crid = ref(-1);
/* 第二层应该显示的文字 */
let twoTitle = ref("");
let twoTitles = ref("");
/* 第三层的数据 */
let thereList = ref([]);
/* 完成按钮的显示隐藏 */
let isOk = ref(false);
/* 页面头部左侧文字 */
let titleShow = ref(false);
/* tab active */
let active = ref(0);
/* tab栏数据 */
let tabsList = ref([]);
/* tab控制近期公开课显示隐藏 */
let tabsListShow = ref(true);
/* banner数据 */
let bannerList = ref([]);
/* bannerId */
let bannerId = ref(0);
/* 传值数据 */
let contentParams = reactive({
  page: 1,
  limit: 15,
});
/* foot */
/* 推荐好课 */
let contentList = ref([]);
/* 近期公开课 */
let getrecentOpens = ref([]);
/* 思数据 */
let list = ref([{ name: "在校生" }, { name: "在职" }]);
/* ————————————————————————————我是数据分界线 */
onMounted(() => {
  getInit();
  getTabs();
  initBanner();
  getrecentOpen();
  if (store.locstorageList.length != 0) {
    show.value = false;
  } else {
    show.value = true;
  }
});
/* 获取第一次点击的数据 */
const getInit = async () => {
  let res = await proxy.$API.getone();
  oneList.value = res.data.data;
};
/* 头部点击 */
const clickTop = () => {
  (show.value = true), (flag.value = 0);
};
/* 点击第一次 */
const changeOne = async (val, i) => {
  id.value = i;
  twoTitle.value = val.title;
  classify_id.value = val.id;
  flag.value = 1;
  let res = await proxy.$API.getTwo({ classify_id: val.id });
  thereList.value = res.data.data;
};
/* 点击第二次 */
const changetwo = (i) => {
  rid.value = i;
  flag.value = 2;
};
/* 点击第三次 */
const changeThere = (val, index) => {
  crid.value = index;
  isOk.value = true;
};
/* 点击完成 */
const isOks = () => {
  show.value = false;
  titleShow.value = true;
  twoTitles.value = twoTitle.value;

  let arr = [
    { one: oneList.value[id.value] },
    { two: list.value[rid.value] },
    { there: thereList.value[crid.value] },
  ];
  store.isok(arr);
  getTabs();
  getrecentOpen();
};
/* 获取tab栏数据 */
const getTabs = async () => {
  const res = await proxy.$API.getTab({
    classify_id:
      store.locstorageList.length != 0 ? store.locstorageList[0].one.id : [],
  });
  tabsList.value = res.data.data;
  tabsList.value.unshift({
    title: "精选",
    id: 3,
  });
  initBanner();
  content();
};

const tab = (id) => {
  bannerId.value = id.name;
  if (id.name == 3) {
    tabsListShow.value = true;
  } else {
    tabsListShow.value = false;
  }
  initBanner();
  content();
};
const initBanner = async () => {
  const res = await proxy.$API.getBanner({
    id: store.locstorageList.length != 0 ? store.locstorageList[0].one.id : [],
    rid: bannerId.value,
  });
  bannerList.value = res.data.data;
};
/* 推荐好课 */
const content = async () => {
  let res = await proxy.$API.getContentApi({
    page: contentParams.page,
    limit: contentParams.limit,
    classify_id: bannerId.value,
  });
  contentList.value = res.data.data;
};
/* 近期公开课 */
const getrecentOpen = async () => {
  let res = await proxy.$API.getrecentOpenApi({
    classify_id:
      store.locstorageList.length != 0 ? store.locstorageList[0].one.id : [],
  });
  res.data.data.course_list.splice(3);
  // res.data.data.course_list.;
  getrecentOpens.value = res.data.data;
  console.log(getrecentOpens.value);
};
/* 去搜索 */
const goSearch = () => {
  router.push("./search");
};
/* 去详情 */
const goDetail = (id) => {
  if (id == 0) {
    Toast("这个不能跳哦");
    return;
  }
  router.push(`./Detail?basis_id=${id}`);
};
/* 去免费直播课 */
const gofreeofChargeApi = () => {
  router.push("./gofreeofCharge");
};
</script>

<style lang="scss" scoped>
.indexView {
  width: 100%;
  height: 100%;
  color: #111;
  .indexBox {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    header {
      width: 100%;
      height: 88px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-sizing: border-box;
      div {
        img {
          width: 48px;
          height: 48px;
          margin-left: 40px;
        }
      }
    }
    aside {
      flex: 1;
      height: calc(100vh - 176px);
      overflow: auto;
      padding: 0 30px;
      box-sizing: border-box;
      //   margin-bottom: 20px;
      .swipeBottom {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .sp {
          text-align: center;
          width: 22%;
          box-sizing: border-box;
          display: inline-block;
          padding: 10px 0;
          margin: 0 10px;
          background: #fff4e5;
          color: #f15a24;
          font-size: 14px;
          border: 1px solid #f15a24;
        }
        .ky {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #a0a7b8;
          margin-top: 20px;
          img {
            width: 72px;
            margin-bottom: 20px;
          }
        }
      }
      ul {
        width: 100%;
        height: 100px;
        li {
          border-radius: 20px;
          box-shadow: 4px 4px 20px #ccc;
          margin: 10px 0 30px;
          .contTop {
            display: inline-block;
            padding: 5px 15px;
            background: #f15a24;
            margin-bottom: 10px;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
            font-size: 20px;
            color: #fff;
          }
          .contBoxs {
            padding: 10px 30px 20px;
            box-sizing: border-box;
            font-size: 26px;
            .teachers {
              display: flex;
              margin: 20px 0 30px 0;
              span {
                display: flex;
                align-items: center;
                margin-left: 5px;
                img {
                  border-radius: 50%;
                  width: 50px;
                  height: 50px;
                }
              }
            }
            .label {
              width: 100%;
              margin-top: 8px;
              span {
                display: inline-block;
                padding: 5px 10px;
                border-radius: 20px;
                box-shadow: 4px 4px 10px #ccc;
              }
            }
            .contBoxsBottom {
              padding: 20px 0;
              display: flex;
              justify-content: space-between;
              border-top: 1px solid #eee;
            }
            .contBoxsTitle {
              font-size: 26px;
              font-weight: 600;
            }
          }
        }
      }
      ol {
        // height: 450px;
        overflow: hidden;
        .olTop {
          display: flex;
          justify-content: space-between;
          font-size: 28px;
          margin-bottom: 40px;
          .p1 {
            font-size: 40px;
            font-weight: 600;
          }
        }
        .b_box {
          display: flex;
          justify-content: space-between;
          font-size: 25px;
          .li {
            width: 33%;
            margin: 0 10px;
            height: 270px;
            .liBox {
              .lis {
                // margin: 0 30px;
                box-shadow: 4px 4px 30px #ccc;
                position: relative;
                padding: 30px 0;
                text-align: center;
                img {
                  // position: absolute;
                  // margin-left: 38%;
                  margin-top: -35%;
                  width: 60px;
                  border-radius: 50%;
                  border: 1px solid red;
                  box-shadow: 0 0 20px red;
                }
                .pTitle {
                  padding: 0 20px;
                  margin: 20px 0;
                  display: -webkit-box;
                  overflow: hidden;
                  white-space: normal !important;
                  text-overflow: ellipsis;
                  word-wrap: break-word;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
                .price {
                  margin: 10px 30px 10px;
                  color: #fff;
                  padding: 5px 10px;
                  border-radius: 20px;
                  background: #f15b24a9;
                }
              }
            }
          }
        }
      }
    }
    footer {
      width: 100%;
      height: 100px;
    }
  }
}
.content {
  padding: 16px 16px 0;
  ul {
    li {
      background: #f8f8f5;
      border-radius: 30px;
      text-align: center;
      box-sizing: border-box;
      width: 8.37333rem;
      border-radius: 0.66667rem;
      height: 1.33333rem;
      margin: 0 auto 0.30667rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 25px;
    }
    .active {
      background: #f15a24;
      color: #fff;
    }
  }
}
:deep(.van-action-sheet__description) {
  display: flex;
  // justify-content: space-between;
  span {
    width: 33%;
    .i {
      background: #f15a24;
      color: #fff;
      display: inline-block;
      padding: 2px 20px;
      border-radius: 20px;
      text-align: center;
    }
  }
}
.my-swipe {
  width: 100%;
  img {
    width: 100%;
  }
}
.green {
  color: green !important;
  font-weight: 700;
}
.red {
  color: red !important;
  font-weight: 600;
}
.isOk {
  color: #f15a24;
}
</style>
