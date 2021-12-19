// 解决引入 less 导致页面空白的问题
if (!window.less) {
  window.less = {
    async: true,
  };
} else {
  window.less.async = true;
}

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}