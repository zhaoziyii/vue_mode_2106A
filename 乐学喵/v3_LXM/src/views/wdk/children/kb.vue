<template>
  <div class="container">
    <Header @goBack="goBack"></Header>
    <div class="titles">
      <h2>{{ year }}年{{ month }}月</h2>
      <div>
        <van-icon name="arrow-left" />
        &nbsp;
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="calendar">
      <!-- 星期 -->
      <div v-for="(item, index) in dayArr" :key="index">{{ item }}</div>
      <!-- 天数 -->
      <div v-for="item in dateArr" :key="item" @click="Getday(item)">
        <span :class="['a', day == item ? 'active' : '']"> {{ item }}</span>
      </div>
    </div>

    <nav>
      <p>当日课程</p>
      <div>
        <img src="../../../assets/易复习.png" alt="" />
        <span>当前没有课，去复习一下之前的吧</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, getCurrentInstance } from "vue";
import Header from "../../../components/Header.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    let state = reactive({
      year: "", // 年
      month: "", // 月
      day: "", // 日
      dayArr: ["日", "一", "二", "三", "四", "五", "六"], // 星期数组
      dateArr: [], // 当前月份的天数
    });
    let { proxy } = getCurrentInstance();
    let addZero = (date) => {
      // 月、日个位数 补零
      return date.toString().padStart(2, "0");
    };

    let getDate = (newDate) => {
      // 获得当前月份的所有天数
      let date = new Date(newDate);
      state.year = date.getFullYear();
      state.month = addZero(date.getMonth() + 1); // 补零
      state.day = addZero(date.getDate()); // 补零

      let firstDay = new Date(state.year, state.month - 1, 1).getDay(); // 每月第一天星期几

      let monthNum = new Date(state.year, state.month, -1).getDate() + 1; // 每月天数

      for (let i = 1; i < monthNum + 1; i++) {
        state.dateArr.push(i); // 遍历添加当前月份的每一天
      }
      for (let i = 0; i < firstDay; i++) {
        state.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
      }
    };
    let Getday = async (val) => {
      let data = `${state.year}-${state.month}-${val}`;
      let a = Date.parse(data) / 1000 - 28800;
      console.log(a);
      const res = await proxy.$API.dataApi({
        time: JSON.stringify(a),
      });
      console.log(res);
      state.day = val;
    };
    let goBack = () => {
      router.back();
    };
    onMounted(() => {
      // 相当于 vue2.0 的 mounted
      getDate(new Date());
    });

    return {
      ...toRefs(state), // 将 state 返回出去，就可以直接使用 state 里面的属性
      Getday,
      goBack,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  //   align-items: center;
  flex-direction: column;
  .titles {
    box-sizing: border-box;
    height: 60px;
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    h2 {
      text-align: left;
      font-size: 35px;
      font-weight: 500;
    }
  }
  .calendar {
    width: 100%;
    height: 30%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    div {
      width: calc(100% / 7);
      height: calc(100% / 7);
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        border-radius: 50%;
        justify-content: center;
      }
    }
  }
  nav {
    width: 100%;
    height: 60%;
    padding: 30px;
    box-sizing: border-box;
    background: #fafafa;
    // position: relative;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;
      img {
        width: 308px;
        height: 308px;
      }
      span {
        color: #bab6be;
        margin-top: 20px;
      }
    }
  }
}
.active {
  background-color: #f15a24;
  color: #fff;
}
</style>
