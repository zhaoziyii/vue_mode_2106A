import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  persist: true,
  state: () => ({
    counter: 0,
    /* 存储的数据 */
    locstorageList: [],
    /* 历史记录 */
    history: [],
    collectShow: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    /* 确定 */
    isok(val) {
      console.log(val);
      this.locstorageList = val;
    },
    /* 搜索 */
    isSearch(val) {
      let index = this.history.findIndex((item) => item == val);

      if (index == -1 && val != "" && val != " ") {
        this.history.unshift(val);
      } else {
        return;
      }
      if (this.history.length >= 4) {
        this.history.pop();
      }
    },
  },
});
