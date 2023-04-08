import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang:'zh-CN',
  cleanUrls: true,
  title: '',
  titleTemplate: '创意工作室',
  description: 'About Nirvana Studio',
  vite: { 
    plugins: [
      SearchPlugin({
        buttonLabel: "搜索",
        placeholder: "情输入关键词",
        encode: false,
        tokenize: 'forward'// 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11
        // 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
        // encode: false,
        // tokenize: "full",
      })
    ] 
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示范', link: '/markdown-examples' },
      { text: '团队',link:'/teams'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NirvanaStudio' }
    ]
  }
})