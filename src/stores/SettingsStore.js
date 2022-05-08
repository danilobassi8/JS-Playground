import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      theme: localStorage.theme || 'main-dark',
      layout: localStorage.layout || 'left',
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
      localStorage.theme = newTheme;
    },

    changeLayout(newLayout) {
      this.layout = newLayout;
      localStorage.layout = newLayout;
    },
  },
});
