import { IConfig } from 'umi-types';

import microApps from './micro-apps';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    [
      '@umijs/plugin-qiankun',
      {
        master: {
          // 注册子应用信息
          apps: [
            {
              name: "react-micro",
              entry: "//localhost:18101",
              base: "/react-micro",
            },
            {
              name: "umi2-micro",
              entry: "//localhost:18102",
              base: "/umi2-micro",
            },
            {
              name: "umi3-micro",
              entry: "//localhost:18103",
              base: "/umi3-micro",
            },
            {
              name: "vue2-micro",
              entry: "//localhost:18104",
              base: "/vue2-micro",
            },
            {
              name: "vue3-micro",
              entry: "//localhost:18105",
              base: "/vue3-micro",
            },
          ],
          jsSandbox: true, // 是否启用 js 沙箱，默认为 false
          prefetch: true, // 是否启用 prefetch 特性，默认为 true
        },
      },
    ],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi2',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
