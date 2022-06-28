<template>
  <div class="gofreeofCharge">
    <van-nav-bar title="免费直播课" left-arrow @click-left="router.back()" />

    <ul>
      <li v-for="(item, index) in contentList" :key="index">
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
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { useCounterStore } from "../../../stores/counter.js";
import { useRouter } from "vue-router";
const { proxy } = getCurrentInstance();
const store = useCounterStore();
const router = useRouter();
onMounted(() => {
  getInitList();
});
let contentList = ref([]);
const getInitList = async () => {
  const res = await proxy.$API.freeofChargeApi({
    classify_id: store.locstorageList[0].one.id,
  });
  contentList.value = res.data.data;
  console.log(res);
};
</script>

<style lang="scss" scoped>
.gofreeofCharge {
  //   width: 100%;
  height: 100%;
  margin: 0 30px;
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
.green {
  color: green;
  font-weight: 700;
}
.red {
  color: red;
  font-weight: 600;
}
</style>
