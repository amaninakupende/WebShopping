import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import createComponent from './components';

createApp(App).use(router).use(store).use(createComponent).mount('#app');

