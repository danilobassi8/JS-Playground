<template>
  <div class="item-container flex-centered">
    <div class="item flex-centered" @click="$router.push(redirect)">
      <i :class="`icon ${icon}`" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  icon: String,
  name: String,
  redirect: String,
});
</script>

<style scoped lang="scss">
$box-separation: 5px;

.flex-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-container {
  width: 100%;
  margin-top: $box-separation;
}

.item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1/1;

  margin: $box-separation;

  border-radius: 50%;
  background-color: var(--bg-contrast-100);

  &:hover {
    border-radius: 10px;
    background-color: var(--primary);
    transition: all ease 0.2s;
  }

  .icon {
    font-size: 30px;
    color: var(--nav-icons);
  }
}
</style>
