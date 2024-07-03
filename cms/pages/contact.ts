import { notNested } from '../__shared';
import { linkOrButton, media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'contact',
  group: 'pages',
  injectContext: {
    assign: 'contact',
    page: 'contact',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
      cover: collections.file({
        label: 'Cover',
        fields: {
          image: widgets.image({ label: 'Imagen', required: true, ...media.contact, hint: 'Medidas: 420*421px' }),
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
        },
      }),
      cards: collections.file({
        label: 'Tarjetas',
        fields: {
          phones: widgets.object({
            label: 'Teléfonos',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.contact, hint: 'Medidas: 57*57px' }),
              title: widgets.string({ label: 'Título', required: true }),
              numbers: widgets.list({
                label: 'Números',
                fields: {
                  number: widgets.string({ label: 'Número', required: true }),
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
          }),
          suggestions: widgets.object({
            label: 'Sugerencias',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.contact, hint: 'Medidas: 57*57px' }),
              title: widgets.string({ label: 'Título', required: true }),
              txt: widgets.markdown({ label: 'Texto', required: false }),
              btn: widgets.object({
                label: 'Botón',
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
          }),
        },
      }),
      location: collections.file({
        label: 'Ubicación',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
          card: widgets.object({
            label: 'Información',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.contact, hint: 'Medidas: 57*57px' }),
              place: widgets.string({ label: 'Lugar', required: true }),
              address: widgets.string({ label: 'Dirección', required: true }),
              btn: widgets.object({
                label: 'Botón',
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
              map: widgets.string({ label: 'Mapa', required: true }),
            },
          }),
        },
      }),
      form: collections.file({
        label: 'Formulario',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          form: widgets.list({
            label: 'Campos del formulario',
            fields: {
              type: widgets.string({ label: 'Tipo', required: true }),
              id: widgets.string({ label: 'ID', required: true }),
              label: widgets.string({ label: 'Nombre', required: true }),
              error: widgets.string({ label: 'Error', required: true }),
              rules: widgets.string({ label: 'Reglas', required: true }),
            },
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Contact',
        files,
      },
    );
    return model;
  },
});
