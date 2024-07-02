document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollX !== 0)
      window.scrollTo(0, window.scrollY);
  });
});
