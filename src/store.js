import { getRandomColor } from 'color-fns';
import { computed, reactive } from 'vue';
import { newArray } from './utils';

export const MAX_COLOR_HISTROY = 6;

let store;

export function useVerteStore(opts) {
  if (store) {
    return store;
  }

  opts = opts || {};
  const { recentColors: recentColorsOpt } = opts;

  const recentColors = reactive(recentColorsOpt || newArray(6, getRandomColor));

  store = {
    recentColors: computed(() => recentColors),
    addRecentColor(newColor) {
      if (recentColors.includes(newColor)) {
        return;
      }

      if (recentColors.length >= MAX_COLOR_HISTROY) {
        recentColors.pop();
      }

      recentColors.unshift(newColor);
    },
  };

  return store;
}
