document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const slides = document.querySelectorAll('.carousel-item');
  const logos = document.querySelectorAll('.brand-logos div');
  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000; // 5 segundos

  // Función para actualizar la posición del carrusel
  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    logos.forEach((logo, index) => {
      if (index === currentIndex)
        logo.classList.add('active');
      else
        logo.classList.remove('active');
    });
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  // Auto avance del carrusel
  let autoSlide = setInterval(nextSlide, intervalTime);

  // Control de los logos
  logos.forEach((logo, index) => {
    logo.addEventListener('click', () => {
      clearInterval(autoSlide); // Detener el auto avance
      currentIndex = index;
      updateCarousel();
      autoSlide = setInterval(nextSlide, intervalTime); // Reiniciar el auto avance
    });
  });

  // Iniciar la primera actualización
  updateCarousel();
});
