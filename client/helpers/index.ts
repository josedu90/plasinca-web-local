import consola from 'consola';
import type { App } from 'vue';

export const ensureMount = (app: App, id: string): void => {
  if (document.getElementById(id))
    app.mount(`#${id}`);
  else
    consola.warn('The ID "%s" dont exist', id);
};

export const staticValues = () => ({
  slotcarnext: 'ArrowNext',
  slotCarPrev: 'ArrowPrev',
});
