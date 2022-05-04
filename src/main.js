import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';

// Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);
dom.watch();

// Vue Router

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
