import { createApp } from 'vue'

//引入normolize.css
import 'normalize.css/normalize.css'
//引入element UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue'
import router from './router'
import store from './store'



//主组件
let app = createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus);
//定义组件
// import hellocom from '@/components/HelloWorld';
// app.component('hello-world',hellocom)

app.mount('#app');

