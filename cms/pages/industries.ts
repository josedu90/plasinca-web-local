import { notNested } from '../__shared';
import { linkOrButton, media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'industries',
  group: 'pages',
  injectContext: {
    assign: 'industries',
    page: 'industries',
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
          txt: widgets.string({ label: 'Texto', required: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.industries, hint: 'Medidas: 531*531px' }),
        },
      }),
      industries: collections.file({
        label: 'Industrias',
        fields: {
          items: widgets.list({
            label: 'Título',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true, ...media.industries, hint: 'Medidas: 130*130px' }),
              title: widgets.string({ label: 'Título', required: true }),
              list: widgets.list({
                label: 'Lista',
                fields: {
                  txt: widgets.string({ label: 'Texto', required: true }),
                },
              }),
            },
          }),
        },
      }),
      banner: collections.file({
        label: 'Banner',
        fields: {
          txt: widgets.string({ label: 'Texto', required: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.industries, hint: 'Medidas: 531*531px' }),
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
    };
    const model = collections.files(
      {
        label: 'Industrias',
        files,
      },
    );
    return model;
  },
});
