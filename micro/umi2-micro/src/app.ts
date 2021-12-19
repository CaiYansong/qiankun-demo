export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('umi2 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('umi2 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('umi2 unmount', props);
  },
};
