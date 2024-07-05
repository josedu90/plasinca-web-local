document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const content = item.querySelector('.accordion-content');
      const chevron = item.querySelector('.chevron');

      if (content.classList.contains('show')) {
        content.classList.remove('show');
        content.style.maxHeight = '0';
        chevron.classList.remove('rotate-90');
        chevron.classList.add('rotate-0');
      }
      else {
        content.classList.add('show');
        content.style.maxHeight = `${content.scrollHeight}px`;
        chevron.classList.remove('rotate-0');
        chevron.classList.add('rotate-90');
      }
    });
  });
});
