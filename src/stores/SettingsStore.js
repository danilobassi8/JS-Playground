import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      theme: 'dark-main',
      layout: 'left',
    };
  },
  actions: {
    changeTheme(newTheme) {
      const oldClassName = `theme-${this.theme}`;
      const newClassName = `theme-${newTheme}`;
      const app = document.getElementById('app');
      app.classList.remove(oldClassName);
      app.classList.add(newClassName);
      this.theme = newTheme;
    },
  },
});
