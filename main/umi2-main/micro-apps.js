const apps = [
  {
    name: "react-micro",
    entry: "//localhost:18101",
    activeRule: "/react-micro",
  },
  {
    name: "umi2-micro",
    entry: "//localhost:18102",
    activeRule: "/umi2-micro",
  },
  {
    name: "umi3-micro",
    entry: "//localhost:18103",
    activeRule: "/umi3-micro",
  },
  {
    name: "vue2-micro",
    entry: "//localhost:18104",
    activeRule: "/vue2-micro",
  },
  {
    name: "vue3-micro",
    entry: "//localhost:18105",
    activeRule: "/vue3-micro",
  },
];

const microApps = apps.map((item) => ({
  ...item,
  base: item.activeRule,
  path: item.base,
  microApp: item.name,
  container: "#container",
}));

export default microApps;
