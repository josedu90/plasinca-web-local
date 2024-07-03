import { createApp, reactive } from 'petite-vue';
import { email, is_not, min, numeric, required, size } from '@monkeyplus/validates';
import { defineRule } from '@monkeyplus/validates/composable';
import type { StateForm } from '@monkeyplus/validates/form/v1';
import { createForm } from '@monkeyplus/validates/form/v1';

// Trae el lenguage de la pagina
const LANG = document.documentElement.lang;
// Global rules
defineRule('none', () => true);
defineRule('email', email, ({ label }) => LANG === 'en' ? `${label} is not a valid email.` : `${label} no es un email valido.`);
defineRule('required', required, ({ label }) => LANG === 'en' ? `${label} is mandatory.` : `${label} es obligatorio.`);
defineRule('min', min, ({ label }, param) => LANG === 'en' ? `${label} must be at least ${param} characters.` : `${label} debe tener minimo ${param} caracteres.`);
defineRule('is_not', is_not, ({ label }) => LANG === 'en' ? `Select a ${label}.` : `Selecciona un ${label}.`);
defineRule('numeric', numeric, ({ label }) => LANG === 'en' ? `${label} should only have numbers.` : `${label} solo se debe tener números.`);
defineRule('size', size, ({ label }) => LANG === 'en' ? `${label} should not be more than 1 MB.` : `${label} no debe pesar más de 1 MB.`);
// Form instance
function createSingleForm() {
  const _state = reactive<StateForm>({
    initValues: {
    // Proyecto: 'Proyecto',
    },
    values: {},
    rules: {},
    errors: {},
  });
  const { Field, resetForm, validForm } = createForm(_state);
  // Component Form
  function SendForm() {
    return {
      spinner: false,
      response: {
        active: false,
        containerClases: '',
        insideClases: '',
        text: '',
      },
      sendForm() {
        const { valid } = validForm();
        if (!valid)
          return undefined;
        this.spinner = true;

        // grecaptcha.ready(() => {
        //   grecaptcha.execute('6Lel5bQpAAAAAMaN3bYVseKJYAUw3FUdlGYmPV8H', {
        //     action: 'contacto',
        //   })
        // .then((token: any) => {
        const url = import.meta.env.VITE_APP_N8N;
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({ ..._state.values }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((r) => {
          if (!r.ok) {
            throw new Error('Error');
          }
          else {
            this.response.active = true;
            this.spinner = false;
            this.response.containerClases = 'dark:text-green-400 bg-green-100 text-green-800';
            this.response.insideClases = 'bg-green-50 text-green-500 focus:ring-green-400 tw-p-1.5 hover:bg-green-200 dark:text-green-400';
            // window.dataLayer.push({ event: 'Generate_lead' });
            // try {
            //   if (window.fbq) {
            //     window.fbq('track', 'Lead', {
            //       content_name: `Envío_${_state.values.tipo}`,
            //     });
            //   }
            // }
            // catch (error) {
            //   console.warn('Error in fbq');
            // }
            // try {
            //   if (window.lintrk)
            //     window.lintrk('track', { conversion_id: 7878841 });
            // }
            // catch (error) {
            //   console.warn('Error in lintrk');
            // }
            // gtag('event', 'Generate_lead', {
            //   event_id: 'Formulario_sitio_web',
            // });
            this.response.text = LANG === 'en' ? 'Thank you for writing to us, we will contact you soon.' : 'Gracias por escribirnos, pronto nos pondremos en contacto.';
            resetForm();
          }
        }).catch(() => {
          this.response.active = true;
          this.spinner = false;
          this.response.containerClases = 'dark:text-red-400 bg-red-100 text-white';
          this.response.insideClases = 'bg-red-50 text-red-500 focus:ring-red-400 tw-p-1.5 hover:bg-red-200 dark:text-red-400';
          this.response.text = LANG === 'en' ? 'Sorry there was an error, please try again.' : 'Lo sentimos hubo un error, vuelve a intentarlo.';
        });
        // });
        // });
      },
    };
  }

  const app = createApp({
    Field,
    SendForm,
  });
  return app;
}

const form1 = createSingleForm();

setTimeout(() => {
  form1.mount('#the-person');
  if (document.getElementById('the-empresa')) {
    const form2 = createSingleForm();
    form2.mount('#the-empresa');
  }
  if (document.getElementById('the-talent')) {
    const form3 = createSingleForm();
    form3.mount('#the-talent');
  }
}, 30);
