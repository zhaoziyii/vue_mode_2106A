<template>
  <div class="search">
    <div class="top">
      <van-icon @click="goBack" name="arrow-left" />
      <div>
        <van-icon class="icon" name="search" />
        <input v-model.trim="searchVal" @keydown.enter="isSearch" type="text" />
      </div>
      <button @click="isSearch">搜索</button>
    </div>
    <!-- 搜索到的内容 -->
    <ul v-if="searchList.length != 0">
      <li v-for="(item, index) in searchList" :key="index">
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
    <ol v-if="searchList.length == 0">
      <li>历史搜索</li>
      <div>
        <span
          @click="clickIsok(item)"
          v-for="(item, index) in store.history"
          :key="index"
        >
          {{ item }}</span
        >
      </div>
    </ol>
    <!-- <van-empty v-if="searchList.length <= 0" description="描述文字" /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useCounterStore } from "../stores/counter.js";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useCounterStore();
const { proxy } = getCurrentInstance();
const searchVal = ref("");
const searchList = ref([]);
const searchflag = ref(true);
onMounted(() => {});
// 搜索
const isSearch = async () => {
  const res = await proxy.$API.getSearchApi({
    classify_id: store.locstorageList[0].one.id,
    title: searchVal.value,
  });
  store.isSearch(searchVal.value);
  searchList.value = res.data.data;
};
/* 点击 */
const clickIsok = async (val) => {
  const res = await proxy.$API.getSearchApi({
    classify_id: store.locstorageList[0].one.id,
    title: val,
  });
  searchList.value = res.data.data;
};
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
  }
  div {
    position: relative;
    .icon {
      position: absolute;
      top: 15px;
      left: 20px;
    }
    input {
      border: none;
      outline: none;
      box-sizing: border-box;
      padding: 10px 60px;
      background: #e4e7ed;
      border-radius: 30px;
    }
  }
  button {
    border: none;
    background: none;
    margin-right: 10px;
  }
}
ul {
  //   width: 100%;
  height: 100px;
  margin: 40px 20px;
  li {
    border-radius: 20px;
    box-shadow: 4px 4px 30px #ccc;
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
  margin: 20px 20px;
  li {
    padding: 20px;
    box-shadow: 4px 4px 20px #ccc;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    span {
      padding: 10px 20px;
      box-shadow: 0 0 20px #cccc;
      margin: 10px;
    }
  }
}
</style>
