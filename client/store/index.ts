import { defineStore } from 'pinia';
//
// import { createPinia } from 'pinia';
// export const pinia = createPinia();

export const useLayout = defineStore({
  id: 'layout',
  state() {
    return {
      menu: false,
    };
  },
  actions: {
    tooggle() {
      console.log('Toogle menu');

      this.menu = !this.menu;
    },
  },
});
