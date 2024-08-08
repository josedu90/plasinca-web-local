document.addEventListener('DOMContentLoaded', () => {
  const whatsapp = document.getElementById('whatsapp');

  if (whatsapp) {
    whatsapp.addEventListener('click', () => {
      // Lógica de la función a ejecutar
      try {
        if (gtag)
          gtag('event', 'generate_whatsapp', {});
      }
      catch (error) {
        console.warn('Error in gtag');
      }
    });
  }
});
