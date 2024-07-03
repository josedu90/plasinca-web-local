import { media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'clients',
  group: 'pages',
  injectContext: {
    assign: 'clients',
    page: 'clients',
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
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 420*421px' }),
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Clientes',
        files,
      },
    );
    return model;
  },
});
