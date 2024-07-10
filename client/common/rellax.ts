import Rellax from 'rellax';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Rellax

  // Inicializar rellax normalmente para los elementos con data-rellax-axis='x'
  const rellaxElementsX = document.querySelectorAll('.rellax[data-rellax-axis="x"]');

  rellaxElementsX.forEach((element) => {
    const speed = element.getAttribute('data-rellax-speed');
    window.addEventListener('scroll', (event) => {
      event.preventDefault();
      const offset = window.scrollY;
      element.style.transform = `translateX(${speed * offset}px)`;
    });
  });

  // Inicializar rellax normalmente para los elementos sin data-rellax-axis='x'
  // eslint-disable-next-line unused-imports/no-unused-vars
  const rellax = new Rellax('.rellax:not([data-rellax-axis="x"])');
});
