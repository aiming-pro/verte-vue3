import { defineConfig } from 'vitepress';

const sidebar = {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Color History', link: '/guide/color-history' },
        { text: 'Value Binding', link: '/guide/binding' },
      ],
    },
    {
      text: 'Usage',
      items: [{ text: 'Examples', link: '/guide/examples' }],
    },
  ],
  '/api': [{ text: 'API Reference', items: [{ text: 'Verte', link: '/api' }] }],
};

export default defineConfig({
  title: 'Verte',
  description: 'A Complete Vue.js Color Picker Component',
  base: '/verte-vue3/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    logo: '/verte.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiming-pro/verte-vue3' },
    ],
    sidebar,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
});
