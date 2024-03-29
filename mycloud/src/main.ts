import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './uikit/css/uikit.css';
import './uikit/js/uikit.js'; 
import './uikit/js/uikit-icons.js';

const app = createApp(App);

app.use(router);

app.mount('#app');