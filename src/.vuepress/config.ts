import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  // lang: "zh-CN",
  title: "AronaQQBot",
  description: "QQ机器人 阿洛娜 的使用文档",

  theme,

    locales: {
      "/": {
        lang: "zh-CN",
      },
      "/en/": {
        lang: "en-US",
      },
    },


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
