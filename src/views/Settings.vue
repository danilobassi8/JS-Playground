<template>
  <h1>Settings</h1>
  <button @click="store.changeTheme('main-dark')">Dark theme</button>
  <button @click="store.changeTheme('main-light')">Light theme</button>
</template>

<script setup>
import { ref } from 'vue';

import { useSettingsStore } from '../stores/SettingsStore.js';
const store = useSettingsStore();
</script>

<style scoped></style>
