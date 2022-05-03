<template>
  <div class="sidebar_container">
    <div class="sidebar">
      <div class="item top-item">
        <i class="fa-brands fa-js-square"></i>
      </div>
      <hr />
      <ul>
        <li v-for="item in [1, 2, 3]">
          <SidenavItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidenavItem from './SidenavItem.vue';
</script>

<style scoped lang="scss">
.sidebar_container {
  $padding: 5px;
  padding: $padding $padding;
  height: calc(100vh - 2 * $padding);
  display: inline-block;
}
.sidebar {
  width: 75px;
  overflow: hidden;
  height: 100%;
  background-color: var(--main-color);

  border-radius: 4px;

  .top-item {
    padding-top: 30px;
  }
}
* {
  color: white;
}
</style>
