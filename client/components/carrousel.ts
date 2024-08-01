document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const slides = carousel.querySelectorAll('.carousel-item');
    const logos = carousel.querySelectorAll('.brand-logos div');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = parseInt(carousel.getAttribute('data-interval')) || 5000;
    let autoSlide;
    let isHovered = false;

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

    // Function to start the auto sliding
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    // Function to stop the auto sliding
    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    // Auto advance the carousel initially
    startAutoSlide();

    // Stop carousel on mouse enter and resume on mouse leave
    carousel.addEventListener('mouseenter', () => {
      stopAutoSlide();
      isHovered = true;
    });

    carousel.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoSlide();
    });

    // Logo control
    logos.forEach((logo) => {
      const index = parseInt(logo.getAttribute('data-index'));
      logo.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto advance
        currentIndex = index;
        updateCarousel();
        if (!isHovered)
          startAutoSlide(); // Restart auto advance only if not paused by mouse enter
      });
    });

    // Initialize the first update
    updateCarousel();
  });
});
