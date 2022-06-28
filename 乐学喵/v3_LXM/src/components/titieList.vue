<template>
  <div class="titleLise">
    <van-cell title="{{titles}}" is-link @click="goNake">
      <template #value>
        <span class="custom-title">{{ right }}</span>
      </template>
    </van-cell>
  </div>
</template>

<script setup>
import { defineProps, ref, defineProps, defineEmits } from "vue";
const emit = defineEmits();
defineProps({
  titles: {
    type: String,
    default: "你好",
  },
  right: {
    type: String,
    default: localStorage.getItem("url"),
  },
});
console.log(defineProps());
</script>

<style lang="scss" scoped></style>
