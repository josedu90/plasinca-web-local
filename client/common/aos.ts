import aos from 'aos';

// Observador de cambios en el alto del DOM
const observador = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target === document.documentElement) {
      // Cambio en el tamaño del DOM
      aos.refreshHard();

      break;
    }
  }
});

// Inicio del observador en el documento
observador.observe(document.documentElement);

setTimeout(() => {
  aos.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animate__animated',
    // los componentes solo ingresa una vez
    once: true,
  });
  // Inicio del observador en el body
  observador.observe(document.documentElement);
}, 500);
