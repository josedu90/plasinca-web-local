import { seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'conversion',
  group: 'pages',
  injectContext: {
    assign: 'conversion',
    page: 'conversion',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
    };
    const model = collections.files(
      {
        label: 'Conversiones',
        files,
      },
    );
    return model;
  },
});
