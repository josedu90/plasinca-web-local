import { notNested } from '../__shared';
import { linkOrButton, media } from './__shared';

export default defineCmsCollection({
  dir: 'home',
  group: 'pages',
  injectContext: {
    assign: 'home',
    page: 'home',
  },
  setup({ widgets, collections }) {
    const files = {
      cover: collections.file({
        label: 'Cover',
        fields: {
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 229*512px' }),
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
          products: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 599*344px' }),
        },
      }),
      certifications: collections.file({
        label: 'Certificaciones',
        fields: {
          pretitle: widgets.string({ label: 'Pre-Título', required: true }),
          title: widgets.markdown({ label: 'Título', required: true }),
          subtitle: widgets.string({ label: 'Subtítulo', required: false }),
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
          certifications: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 351*89px' }),
          flagleft: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 150*386px' }),
          flagright: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 151*417px' }),
        },
      }),
      products: collections.file({
        label: 'Productos',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.string({ label: 'Texto', required: false }),
          btn: widgets.object({
            label: 'Botón',
            fields: {
              txt: widgets.string({ label: 'Texto', required: true }),
            },
          }),
        },
      }),
      industries: collections.file({
        label: 'Industrias',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          items: widgets.list({
            label: 'Listado',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 130*130px' }),
              txt: widgets.string({ label: 'Texto', required: true }),
            },
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Home',
        files,
      },
    );
    return model;
  },
});
