import { notNested } from '../pages/__shared';
import { linkOrButton, media } from '../__shared';

export default defineCmsCollection({
  dir: 'common',
  group: 'settings',
  injectContext: {
    assign: 'common',
    page: '*',
  },
  setup({ widgets, collections }) {
    const model = collections.files(
      {
        label: 'Elementos comunes',
        files: {
          menu: collections.file(
            {
              label: 'Menú',
              fields: {
                items: widgets.list({
                  label: 'Opciones',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                    header: widgets.boolean({
                      label: 'Activar en header',
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          logos: collections.file(
            {
              label: 'Logotipos',
              fields: {
                logo_header: widgets.image({
                  label: 'Logotipo del header',
                  ...media.shared,
                  hint: 'Medidas: 200*47px',
                }),
                logo_footer: widgets.image({
                  label: 'Logotipo del footer',
                  ...media.shared,
                  hint: 'Medidas: 200*47px',
                }),
              },
            },
          ),
          networks: collections.file(
            {
              label: 'Redes sociales',
              fields: {
                items: widgets.list({
                  label: 'Listado de redes',
                  fields: {
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 40*40px',
                    }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          btns: collections.file(
            {
              label: 'Botones comunes',
              fields: {
                quote: widgets.object({
                  label: 'Botón de cotización',
                  fields: {
                    txt: widgets.string({
                      label: 'Texto',
                    }),
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 24*24px',
                    }),
                  },
                }),
                whatsapp: widgets.object({
                  label: 'Botón de Whatsapp',
                  fields: {
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 71*71px',
                    }),
                  },
                }),
              },
            },
          ),
          footer: collections.file(
            {
              label: 'Footer',
              fields: {
                txt: widgets.markdown({ label: 'Texto del certificado' }),
                policy: widgets.object({
                  label: 'Enlace de políticas de privacidad',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          testimonials: collections.file(
            {
              label: 'Testimonios',
              fields: {
                title: widgets.string({ label: 'Título' }),
                items: widgets.list({
                  label: 'Listado',
                  fields: {
                    image: widgets.image({ label: 'Imagen', required: true, ...media.shared, hint: 'Medidas: 619*484px' }),
                    title: widgets.string({ label: 'Title', required: true }),
                    txt: widgets.markdown({ label: 'Texto', required: true }),
                  },
                }),
              },
            },
          ),
          contact: collections.file(
            {
              label: 'Contactos',
              fields: {
                image: widgets.image({ label: 'Imagen', required: true, ...media.shared, hint: 'Medidas: 160*126px' }),
                pretitle: widgets.string({ label: 'Pre-Título' }),
                title: widgets.string({ label: 'Título' }),
                btns: widgets.list({
                  label: 'Botones',
                  fields: {
                    txt: widgets.markdown({ label: 'Texto', required: true }),
                    image: widgets.image({ label: 'Imagen', required: true, ...media.iconos, hint: 'Medidas: 24*24px' }),
                  },
                }),
              },
            },
          ),
          forms: collections.file({
            label: 'Formularios',
            fields: {
              company: widgets.list({
                label: 'Campos del formulario empresa',
                fields: {
                  type: widgets.string({ label: 'Tipo', required: true }),
                  id: widgets.string({ label: 'ID', required: true }),
                  label: widgets.string({ label: 'Nombre', required: true }),
                  error: widgets.string({ label: 'Error', required: true }),
                  rules: widgets.string({ label: 'Reglas', required: true }),
                  options: widgets.list({
                    label: 'Opciones',
                    fields: {
                      label: widgets.string({ label: 'Opción' }),
                    },
                  }),
                },
              }),
              personal: widgets.list({
                label: 'Campos del formulario persona',
                fields: {
                  type: widgets.string({ label: 'Tipo', required: true }),
                  id: widgets.string({ label: 'ID', required: true }),
                  label: widgets.string({ label: 'Nombre', required: true }),
                  error: widgets.string({ label: 'Error', required: true }),
                  rules: widgets.string({ label: 'Reglas', required: true }),
                  options: widgets.list({
                    label: 'Opciones',
                    fields: {
                      label: widgets.string({ label: 'Opción' }),
                    },
                  }),
                },
              }),
              btn: widgets.object({
                label: 'Botón',
                fields: {
                  txt: widgets.string({ label: 'Texto', required: true }),
                },
              }),
            },
          }),
          cookies: collections.file(
            {
              label: 'Cookies',
              fields: {
                title: widgets.string({ label: 'Título' }),
                txt: widgets.markdown({ label: 'Texto' }),
                custome: widgets.string({ label: 'Título para personalizar cookies' }),
                inputs: widgets.list({
                  label: 'Inputs para personalizar cookies',
                  fields: {
                    label: widgets.string({ label: 'Texto', required: true }),
                    value: widgets.string({ label: 'Valor', required: true, hint: 'Todo en minúsculas y sin espacios' }),
                  },
                }),
                btns: widgets.list({
                  label: 'Botones',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                  },
                }),
              },
            },
          ),
        },
      },
    );
    return model;
  },
});
