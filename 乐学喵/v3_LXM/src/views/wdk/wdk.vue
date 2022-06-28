<template>
  <div class="wdk">
    <van-calendar
      :show-subtitle="true"
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '150px' }"
      :row-height="100"
      lazy-render
      default-date
      :min-date="minDate"
      :max-date="maxDate"
    >
    </van-calendar>
    <!-- 今日课程 -->
    <div class="kc">
      <span>今日课程(0)节</span>
      <span class="sp" @click="goKb">
        <img src="../../assets/课表@2x.png" alt="" />
        <span>课表</span>
      </span>
    </div>
    <!-- 学习记录 -->
    <div class="record" @click="goxxzl">
      <span class="span">
        <img src="../../assets/xxjl.png" alt="" />
        <span>学习记录</span>
      </span>
      <span class="span" @click="goxxzl">
        <img src="../../assets/xxzl.png" alt="" />
        <span>学习资料</span>
      </span>
    </div>
    <!-- 正在学习的课程 -->
    <div class="zzjx">
      <h3>正在学习的课程</h3>
      <span>查看更多></span>
    </div>
    <!-- 内容 -->
    <ul>
      <li
        @click="goDetail(item.id)"
        v-for="(item, index) in initList"
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
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, getCurrentInstance, onMounted } from "vue";
const router = useRouter();
let { proxy } = getCurrentInstance();
const minDate = ref(new Date(2022, 5, 12));
const maxDate = ref(new Date(2022, 5, 18));
const initList = ref([]);
onMounted(() => {
  getInit();
});
const getInit = async () => {
  let res = await proxy.$API.studyIng();
  initList.value = res.data.data;

  console.log(res);
};
/* 去详情 */
const goDetail = (id) => {
  router.push(`./Detail?basis_id=${id}`);
};
/* 去学习资料 */
const goxxzl = () => {};
/* 去课表 */
const goKb = () => {
  router.push("./Kb");
};
</script>

<style lang="scss" scoped>
.wdk {
  width: 100%;
  height: 100%;
}
// :deep(.van-calendar__days) {
//   width: 100%;
//   height: 128px;
//   overflow: hidden;
// }
:deep(.van-calendar__month) {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.kc {
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 30px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    img {
      width: 50px;
      margin-bottom: 10px;
    }
  }
}
.zzjx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 30px;
  box-sizing: border-box;
}
.record {
  width: 100%;
  height: 146px;
  display: flex;
  justify-content: space-around;
  .span {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      margin-bottom: 10px;
    }
    span {
      font-size: 25px;
    }
  }
}
ul {
  margin: 0 30px 120px;
  height: 100%;
  // height: calc(100vh - 100px);
  // overflow: auto;
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
</style>
