import type { Plugin } from 'vue';
import { createPinia } from 'pinia';
import elementPlus from './elementPlus';
import globalComponents from './globalComponents';
import veeValidate from './veeValidate';
const pinia = createPinia();

const plugin: Plugin = {
  install: (app) => {
    app.use(pinia);
    app.use(elementPlus);
    app.use(globalComponents);
    app.use(veeValidate);
    const r = document.getElementById('__FLOW_DATA__')?.innerHTML;
    app.provide('context', JSON.parse(r || '{}'));
  },
};

export default plugin;
