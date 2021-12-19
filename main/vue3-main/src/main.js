import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue'

import microApps from './micro-apps';

createApp(App).mount('#app')

registerMicroApps(microApps);
// 启动 qiankun
start();
