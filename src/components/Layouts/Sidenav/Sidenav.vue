<template>
  <div class="sidebar_container" :style="containerStyles">
    <div class="sidebar" :style="sidebarStyle">
      <!-- LOGO -->

      <div
        class="item-container"
        @click="toggleMenu()"
        :style="{
          display: vertical ? 'block' : 'inline-block',
          width: vertical ? '100%' : '50px',
          height: '50px',
          background: 'blue',
          marginBottom: '20px'
        }"
      >
        <div class="item flex-centered">
          <i :class="`icon fa-solid fa-bars`" />
        </div>
      </div>

      <SidenavItem
        v-for="item in items"
        :icon="item.icon"
        :redirect="item.redirect"
        :fullShow="openedMenu"
        :name="item.name"
      />
    </div>
  </div>
</template>

<!------------ SCRIPT ------------>
<script setup>
import { ref, computed } from 'vue';
import SidenavItem from './SidenavItem.vue';
import { useSettingsStore } from '../../../stores/SettingsStore';

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

const settingsStore = useSettingsStore();
const openedMenu = ref(false);
const toggleMenu = () => (openedMenu.value = !openedMenu.value);
const vertical = computed(() => settingsStore.layout == 'left' || settingsStore.layout == 'right');

const sidebarStyle = computed(() => {
  const style = {};
  const vertical = settingsStore.layout == 'left' || settingsStore.layout == 'right';

  console.log('que onda el vertical', vertical);
  // check if opened
  if (openedMenu.value) {
    style[vertical ? 'width' : 'height'] = '200px';
  }

  if (!vertical) {
    style.width = '100%';
  }

  return style;
});

const containerStyles = computed(() => {
  const style = {};
  if (settingsStore.layout === 'top' || settingsStore === 'bot') {
    style.height = '75px';
  }

  return style;
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
}
</style>
