<template>
  <div class="main-container" :style="mainContainerStyle">
    <Sidenav />
    <div class="content">
      <!-- Router content-->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Sidenav from './Sidenav/Sidenav.vue';
import { useSettingsStore } from '../../stores/SettingsStore';

const settingsStore = useSettingsStore();

const mainContainerStyle = computed(() => {
  const STYLES = {
    left: {},
    right: { flexDirection: 'row-reverse' },
    top: { flexDirection: 'column-reverse' },
    bot: { flexDirection: 'column' },
  };
  return STYLES[settingsStore.layout];
});
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  background: var(--bg-main);
}

.content {
}
</style>
