import { createRouter, createWebHashHistory } from 'vue-router';

// Views
import Home from '../src/views/Home.vue';
import Animations from '../src/views/Animations.vue';
import Settings from '../src/views/Settings.vue';
import Practices from '../src/views/Practices.vue';

// Router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Animations',
      name: 'Animations',
      component: Animations,
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/Practices',
      name: 'Practices',
      component: Practices,
    },
  ],
});
