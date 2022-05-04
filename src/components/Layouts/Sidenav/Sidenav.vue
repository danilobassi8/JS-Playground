<template>
  <div class="sidebar_container">
    <div class="sidebar">
      <div class="item top-item">
        <i class="fa-brands fa-js-square"></i>
      </div>
      <hr />
      <ul>
        <li v-for="item in items">
          <SidenavItem :icon="item.icon" :redirect="item.redirect" />
        </li>
      </ul>
    </div>
  </div>
</template>

<!------------ SCRIPT ------------>
<script setup>
import { ref } from 'vue';
import SidenavItem from './SidenavItem.vue';

const items = [
  {
    icon: 'fa-solid fa-gear',
    name: 'Layout and styles',
    redirect: 'settings',
  },
  {
    icon: 'fa-solid fa-meteor',
    name: 'Animations',
    redirect: 'animations',
  },
  {
    icon: 'fa-solid fa-hammer',
    name: 'Exercises and practices',
    redirect: 'practices',
  },
];
</script>

<!------------ STYLES ------------>

<style scoped lang="scss">
.sidebar_container {
  position: sticky;
  top: 0;
  $padding: 6px;
  padding: $padding $padding;
  height: calc(100vh - 2 * $padding);
  display: inline-block;
}
.sidebar {
  width: 75px;
  overflow: hidden;
  height: 100%;
  background-color: var(--nav-color);

  border-radius: 5px;

  .top-item {
    padding-top: 30px;
  }
}
* {
  color: white;
}
</style>
