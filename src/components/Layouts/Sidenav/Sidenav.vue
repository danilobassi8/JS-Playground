<template>
  <div class="sidebar_container">
    <div class="sidebar" :style="sidebarStyle">
      <SidenavItem
        icon="fa-solid fa-bars"
        @click="toggleMenu"
        :fullShow="openedMenu"
        special="burger"
      />
      <hr />
      <ul>
        <li v-for="item in items">
          <SidenavItem
            :icon="item.icon"
            :redirect="item.redirect"
            :fullShow="openedMenu"
            :name="item.name"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<!------------ SCRIPT ------------>
<script setup>
import { ref, computed } from 'vue';
import SidenavItem from './SidenavItem.vue';

const items = [
  {
    icon: 'fa-solid fa-gear',
    name: 'Settings',
    redirect: 'settings',
  },
  {
    icon: 'fa-solid fa-meteor',
    name: 'Animations',
    redirect: 'animations',
  },
  {
    icon: 'fa-solid fa-hammer',
    name: 'Exercises',
    redirect: 'Practices',
  },
];

const openedMenu = ref(false);
const toggleMenu = () => (openedMenu.value = !openedMenu.value);

const sidebarStyle = computed(() => {
  const opened = {
    width: '200px',
  };
  const closed = {};
  return openedMenu.value ? opened : closed;
});
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
  transition: all ease 0.2s;
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
