import type { Plugin } from 'vue';
// import 'element-plus/packages/theme-chalk/src/base.scss';
// import 'element-plus/packages/theme-chalk/src/common/popup.scss';
import {} from 'element-plus';

import 'dayjs/locale/es';

const plugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$ELEMENT = {};
  },
};

export default plugin;
