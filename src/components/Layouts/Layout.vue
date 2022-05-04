<template>
  <div class="main-container">
    <Sidenav />
    <div class="content">
      <!-- Router content-->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidenav from './Sidenav/Sidenav.vue';
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  background: var(--bg-main);
}

.content {
}
</style>
