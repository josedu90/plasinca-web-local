import { notNested } from '../__shared';
import { linkOrButton, media, seoFields } from './__shared';

export default defineCmsCollection({
  dir: 'about',
  group: 'pages',
  injectContext: {
    assign: 'about',
    page: 'about',
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
          image: widgets.image({ label: 'Imagen', required: true, ...media.about, hint: 'Medidas: 420*421px' }),
          title: widgets.string({ label: 'Título', required: true }),
          txt: widgets.markdown({ label: 'Texto', required: false }),
        },
      }),
      history: collections.file({
        label: 'Línea de tiempo',
        fields: {
          title: widgets.string({ label: 'Título', required: true }),
          items: widgets.list({
            label: 'Línea de tiempo',
            fields: {
              year: widgets.string({ label: 'Año', required: true }),
              txt: widgets.markdown({ label: 'Texto', required: false }),
            },
          }),
        },
      }),
      certifications: collections.file({
        label: 'Certificaciones',
        fields: {
          txt: widgets.markdown({ label: 'Texto', required: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.about, hint: 'Medidas: 310*119px' }),
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
      downloads: collections.file({
        label: 'Descargas',
        fields: {
          items: widgets.list({
            label: 'Lista de descargas',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true, ...media.about, hint: 'Medidas: 86*85px' }),
              title: widgets.string({ label: 'Nombre', required: true }),
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
    };
    const model = collections.files(
      {
        label: 'Sobre nosotros',
        files,
      },
    );
    return model;
  },
});
