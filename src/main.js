import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);
dom.watch();

import App from './App.vue';

const app = createApp(App);
app.use(createPinia());

app.mount('#app');
