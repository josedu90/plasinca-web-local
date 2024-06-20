import './styles';
import './common/toggle';
import Rellax from 'rellax';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

// Inicializa Rellax
const rellax = new Rellax('.rellax', {
  speed: -2, // Ajusta la velocidad según tus necesidades
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});

// Configura GSAP ScrollTrigger para la inercia
document.querySelectorAll('.rellax').forEach((el) => {
  gsap.to(el, {
    y: (i, target) => {
      return `${parseFloat(target.getAttribute('data-rellax-speed')) * -100}px`;
    },
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});
