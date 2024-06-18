import { createApp } from 'petite-vue';

function toggleAction() {
  return createApp({
    state: false,
    childState: false,
    toggle() {
      this.state = !this.state;
    },
    childToggle() {
      this.childState = !this.childState;
    },
  });
}
document.querySelectorAll('.toggle').forEach((element) => {
  toggleAction().mount(element);
});
