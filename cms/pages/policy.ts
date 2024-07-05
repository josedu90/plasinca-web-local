import { seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'policy',
  group: 'pages',
  injectContext: {
    assign: 'policy',
    page: 'policy',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
      content: collections.file({
        label: 'Política',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
          items: widgets.list({
            label: '',
            fields: {
              title: widgets.string({ label: 'Título', required: true }),
              txt: widgets.markdown({ label: 'Texto', required: false }),
            },
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Política',
        files,
      },
    );
    return model;
  },
});
