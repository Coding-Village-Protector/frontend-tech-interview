import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/frontend-tech-interview/",
  title: "FE Tech Interview Guide",
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
          { text: "Web", link: "/web" },
          { text: "Network", link: "/network" },
          { text: "Data Structure", link: "/data-structure" },
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
