<template>
  <div class="item-container flex-centered" :style="itemContainerStyle">
    <div
      class="item flex-centered"
      @click="redirect ? $router.push(redirect) : null"
      :style="styledItem"
    >
      <i :class="`icon ${icon}`" />

      <div class="icon-name" :style="iconStyle">{{ props.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSettingsStore } from '../../../stores/SettingsStore';

const settingsStore = useSettingsStore();

const props = defineProps({
  icon: String,
  name: String,
  redirect: String,
  fullShow: Boolean, // true if expanded
});

// STYLES
const itemContainerStyle = computed(() => {
  const style = {};
  const vertical = settingsStore.layout == 'left' || settingsStore.layout == 'right';

  if (!vertical) {
    style.width = 'var(--box-size)';
    style.display = 'inline-block';
    style.margin = '1px 3px';
  }
  return style;
});

const styledItem = computed(() => {
  const style = {};
  const vertical = settingsStore.layout == 'left' || settingsStore.layout == 'right';

  if (props.fullShow) {
    style.borderRadius = '7px';
    style.justifyContent = 'flex-start';
    style.margin = '5px 10px';
  }

  if (!vertical) {
    style.flexDirection = 'column';
  } else {
    style.flexDirection = 'row';
  }

  return style;
});

const iconStyle = computed(() => {
  const style = {};
  const vertical = settingsStore.layout == 'left' || settingsStore.layout == 'right';

  if (props.fullShow) {
    style.width = '60px';
  } else {
    style.width = '0px';
    style.opacity = '0';
  }
  return style;
});
</script>

<style scoped lang="scss">
$box-separation: 5px;
$hover-box-radius: 10px;

.item-container {
  width: 100%;
}

.item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--box-size);
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
    position: relative;
    color: yellow;
    font-size: 40px;
    background: linear-gradient(to top, #000 50%, transparent 50%);
    background-position: 0px -3px;
  }
}
</style>

<style scoped lang="css">
* {
  --box-size: 65px;
}
</style>
