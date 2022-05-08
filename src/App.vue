<script setup>
import Layout from './components/Layouts/Layout.vue';

// Initialize the theme at start
import { onMounted } from 'vue';
import { useSettingsStore } from './stores/SettingsStore.js';

const settingsStore = useSettingsStore();
onMounted(() => {
  settingsStore.changeTheme(settingsStore.theme);
});
</script>

<template>
  <Layout />
</template>

<style lang="scss">
html {
  * {
    margin: 0px;
    padding: 0px;
  }
}
</style>
