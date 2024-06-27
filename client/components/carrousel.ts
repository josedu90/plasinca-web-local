document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const slides = carousel.querySelectorAll('.carousel-item');
    const logos = carousel.querySelectorAll('.brand-logos div');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = parseInt(carousel.getAttribute('data-interval')) || 5000;

    // Function to update carousel position
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      logos.forEach((logo, index) => {
        if (index === currentIndex)
          logo.classList.add('active');
        else
          logo.classList.remove('active');
      });
    }

    // Function to advance to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    // Auto advance the carousel
    let autoSlide = setInterval(nextSlide, intervalTime);

    // Logo control
    logos.forEach((logo) => {
      const index = parseInt(logo.getAttribute('data-index'));
      logo.addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto advance
        currentIndex = index;
        updateCarousel();
        autoSlide = setInterval(nextSlide, intervalTime); // Restart auto advance
      });
    });

    // Initialize the first update
    updateCarousel();
  });
});
