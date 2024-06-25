import { media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'products',
  group: 'pages',
  injectContext: {
    assign: 'products',
    page: 'products',
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
          title: widgets.string({ label: 'Título', required: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.products, hint: 'Medidas: 531*531px' }),
        },
      }),
      products: collections.file({
        label: 'Productos',
        fields: {
          txt: widgets.string({ label: 'Texto', required: true }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Productos',
        files,
      },
    );
    return model;
  },
});
