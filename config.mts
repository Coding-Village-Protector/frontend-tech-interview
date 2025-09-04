import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/frontend-tech-interview/",
  title: "FE Tech Interview Handbook",
  description: "Coding Village Protector",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Conventions",
        items: [{ text: "기타", link: "/etc" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Coding-Village-Protector/frontend-tech-interview",
      },
    ],
  },
});
