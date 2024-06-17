import { createApp } from 'petite-vue';

function toggleAction() {
  return createApp({
    state: false,
    toggle() {
      this.state = !this.state;
    },
  });
}
document.querySelectorAll('.toggle').forEach((element) => {
  toggleAction().mount(element);
});
