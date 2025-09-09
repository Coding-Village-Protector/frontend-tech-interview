import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/frontend-tech-interview/",
  title: "FE 기술면접 가이드",
  description: "Coding Village Protector Study",
  head: [
    ["link", { rel: "icon", href: "/frontend-tech-interview/favicon.ico" }],
  ],
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Chapters",
        items: [
          { text: "Javascript", link: "/javascript" },
          { text: "React", link: "/react" },
          { text: "Next.js", link: "/next" },
          { text: "웹", link: "/web" },
          { text: "네트워크", link: "/network" },
          { text: "자료구조 & 알고리즘", link: "/data-structure" },
          { text: "기타 FE 지식", link: "/etc" },
        ],
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
