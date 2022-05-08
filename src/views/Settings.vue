<template>
  <h1>Settings</h1>
  <button @click="settingsStore.changeTheme('main-dark')">Dark theme</button>
  <button @click="settingsStore.changeTheme('main-light')">Light theme</button>

  <h1>Layout</h1>
  <button @click="settingsStore.changeLayout('left')">LEFT</button>
  <button @click="settingsStore.changeLayout('right')">RIGHT</button>
  <button @click="settingsStore.changeLayout('top')">TOP</button>
  <button @click="settingsStore.changeLayout('bot')">BOT</button>
</template>

<script setup>
import { ref } from 'vue';

import { useSettingsStore } from '../stores/SettingsStore.js';
const settingsStore = useSettingsStore();
</script>

<style scoped></style>
