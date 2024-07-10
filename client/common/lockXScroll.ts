document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  window.addEventListener('scroll', (event) => {
    event.preventDefault();
    if (window.scrollX !== 0)
      window.scrollTo(0, window.scrollY);
  });
});
