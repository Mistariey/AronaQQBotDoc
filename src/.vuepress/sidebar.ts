import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "file-word",
      prefix: "documentation/",
      link: "documentation/",
      children: "structure",
    },/*
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    }*/
  ],
});
