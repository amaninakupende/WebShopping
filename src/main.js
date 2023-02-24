import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import createComponent from './components';
import ElementPlus from 'element-plus'

createApp(App).use(router).use(store).use(createComponent).use(ElementPlus).mount('#app');

