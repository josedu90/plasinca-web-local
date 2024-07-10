import { notNested } from '../__shared';
import { linkOrButton, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'error',
  group: 'pages',
  injectContext: {
    assign: 'error',
    page: 'notFound',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
      content: collections.file({
        label: 'Contenido',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
          items: widgets.list({
            label: 'Opciones',
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
    };
    const model = collections.files(
      {
        label: 'Error 404',
        files,
      },
    );
    return model;
  },
});
