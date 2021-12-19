export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('umi3 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('umi3 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('umi3 unmount', props);
  },
};