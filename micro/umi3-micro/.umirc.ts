import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/umi3-micro',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
