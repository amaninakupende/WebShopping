import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import createComponent from './components';
import './mock/config.js'; 

createApp(App).use(router).use(store).use(createComponent).mount('#app');

