import { media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'singleProducts',
  group: 'pages',
  injectContext: {
    assign: 'product',
    page: 'products/**',
  },
  setup({ widgets, collections }) {
    const fields = {
      url: widgets.string({ label: 'Url seo' }),
      seo: widgets.object(
        {
          collapsed: true,
          label: 'Metadatos',
          fields: seoFields(widgets, '/products/'),
        },
      ),
      image: widgets.image({
        label: 'Imagen principal',
        ...media.products,
        hint: 'Medidas sugeridas: 384px * 384px',
      }),
      name: widgets.string({ label: 'Nombre' }),
      txt: widgets.string({ label: 'Resumen' }),
      options: widgets.list({
        label: 'Productos',
        fields: {
          name: widgets.string({ label: 'Nombre' }),
          txt: widgets.string({ label: 'Resumen' }),
          image: widgets.image({
            label: 'Imagen del cover',
            ...media.products,
            hint: 'Medidas sugeridas: 384px * 384px',
          }),
          slider: widgets.list({
            label: 'Slider',
            fields: {
              image: widgets.image({
                label: 'Imagen',
                ...media.products,
                hint: 'Medidas sugeridas: 384px * 384px',
              }),
            },
          }),
        },
      }),
      contact: widgets.string({ label: 'Copy de contacto' }),
    };
    const model = collections.folder(
      {
        label: 'Productos',
        create: true,
        identifier_field: 'title',
        slug: '{{year}}-{{month}}-{{day}}-{{title}}',
        editor: { preview: false },
        fields,
      },
    );

    return model;
  },
});
