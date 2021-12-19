const apps = [
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
];

const microApps = apps.map((item) => ({
  ...item,
}));

module.exports.default = microApps;
