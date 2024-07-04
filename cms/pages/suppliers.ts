import { media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'suppliers',
  group: 'pages',
  injectContext: {
    assign: 'suppliers',
    page: 'suppliers',
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
          image: widgets.image({ label: 'Imagen', required: true, ...media.suppliers, hint: 'Medidas: 420*421px' }),
          title: widgets.string({ label: 'Título', required: true }),
        },
      }),
      form: collections.file({
        label: 'Formulario',
        fields: {
          txt: widgets.markdown({ label: 'Texto', required: true }),
          title: widgets.string({ label: 'Título', required: true }),
          form: widgets.list({
            label: 'Campos del formulario',
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
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Talento',
        files,
      },
    );
    return model;
  },
});
