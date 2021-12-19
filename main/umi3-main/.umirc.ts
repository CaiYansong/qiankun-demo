import { defineConfig } from 'umi';
import microApps from './micro-apps.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/pages/index',
      routes: [ ...microApps, ]
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: microApps,
    },
  },
});
