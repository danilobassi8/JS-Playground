<template>
  <div class="item">
    <i class="fa-solid fa-0"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss">
.item {
  cursor: pointer;
  width: 100%;
  text-align: center;
  height: 50px;

  &:hover {
    background-color: dodgerblue;
  }
}
</style>
