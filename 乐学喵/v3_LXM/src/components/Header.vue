<template>
  <div class="header">
    <span><van-icon size="20" @click="goBack" name="arrow-left" /></span>
    <span class="sp">{{ title }}</span>
    <span class="right">{{ right }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const emit = defineEmits();
defineProps({
  title: {
    type: String,
    default: "课程表",
  },
  right: {
    type: String,
    default: "今天",
  },
});
const goBack = () => {
  emit("goBack");
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 88px;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  span {
    width: 33%;
    line-height: 88px;
  }
  .sp {
    font-size: 35px;
    font-weight: 600;
    text-align: center;
  }
  .right {
    text-align: right;
  }
}
</style>
