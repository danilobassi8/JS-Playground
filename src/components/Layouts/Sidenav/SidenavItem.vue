<template>
  <div class="item-container flex-centered">
    <div
      class="item flex-centered"
      @click="redirect ? $router.push(redirect) : null"
      :style="styledItem"
    >
      <i :class="`icon ${icon}`" />
      <template v-if="!special">
        <div class="icon-name" :style="iconStyle">{{ props.name }}</div>
      </template>
      <div v-if="special == 'burger'">
        <div v-if="fullShow" class="icon-name main-logo">
          <i class="fa-brands fa-js" /> &nbsp; <span>Playground</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  icon: String,
  name: String,
  redirect: String,
  fullShow: Boolean, // true if expanded
  special: String, // to determine special behaviour
});

const styledItem = computed(() => {
  const flexDirection = props.special == 'burger' ? 'row-reverse' : 'row';

  return props.fullShow
    ? { borderRadius: '7px', justifyContent: 'flex-start', margin: '5px 10px', flexDirection }
    : {};
});

const iconStyle = computed(() => {
  return props.fullShow ? { width: '60px' } : { width: '0px', opacity: '0' };
});
</script>

<style scoped lang="scss">
$box-separation: 5px;
$hover-box-radius: 10px;

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
  height: 65px;
  transition: all ease 0.2s;

  margin: $box-separation;

  border-radius: 50%;
  background-color: var(--bg-contrast-100);

  &:hover {
    border-radius: 10px;
    background-color: var(--primary);
  }

  .icon {
    width: 60px;
    font-size: 30px;
    color: var(--nav-icons);
  }
  .icon-name {
    transition: all ease 0.2s;
  }
}

.main-logo {
  display: flex;
  align-items: flex-end;
  .fa-js {
    color: yellow;
    font-size: 30px;
  }
}
</style>
