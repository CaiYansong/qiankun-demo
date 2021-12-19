import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue'

import microApps from './micro-apps';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

registerMicroApps(microApps);
// 启动 qiankun
start();
