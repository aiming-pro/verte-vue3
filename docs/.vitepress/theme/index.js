import DefaultTheme from 'vitepress/theme';
import Verte from '../../../src/components/Verte.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('verte-demo', Verte);
  },
};
