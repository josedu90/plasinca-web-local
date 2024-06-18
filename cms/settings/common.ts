import { notNested } from '../pages/__shared';
import { linkOrButton, media } from '../__shared';

export default defineCmsCollection({
  dir: 'common',
  group: 'settings',
  injectContext: {
    assign: 'common',
    page: '*',
  },
  setup({ widgets, collections }) {
    const model = collections.files(
      {
        label: 'Elementos comunes',
        files: {
          menu: collections.file(
            {
              label: 'Menú',
              fields: {
                items: widgets.list({
                  label: 'Opciones',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                    header: widgets.boolean({
                      label: 'Activar en header',
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          logos: collections.file(
            {
              label: 'Logotipos',
              fields: {
                logo_header: widgets.image({
                  label: 'Logotipo del header',
                  ...media.shared,
                  hint: 'Medidas: 200*47px',
                }),
                logo_footer: widgets.image({
                  label: 'Logotipo del footer',
                  ...media.shared,
                  hint: 'Medidas: 200*47px',
                }),
              },
            },
          ),
          networks: collections.file(
            {
              label: 'Redes sociales',
              fields: {
                items: widgets.list({
                  label: 'Listado de redes',
                  fields: {
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 40*40px',
                    }),
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
            },
          ),
          btns: collections.file(
            {
              label: 'Botones comunes',
              fields: {
                quote: widgets.object({
                  label: 'Botón de cotización',
                  fields: {
                    txt: widgets.string({
                      label: 'Texto',
                    }),
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 24*24px',
                    }),
                  },
                }),
                whatsapp: widgets.object({
                  label: 'Botón de Whatsapp',
                  fields: {
                    icon: widgets.image({
                      label: 'Logotipo',
                      ...media.iconos,
                      hint: 'Medidas: 71*71px',
                    }),
                  },
                }),
              },
            },
          ),
          footer: collections.file(
            {
              label: 'Footer',
              fields: {
                txt: widgets.markdown({ label: 'Texto del certificado' }),
                policy: widgets.object({
                  label: 'Enlace de políticas de privacidad',
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
            },
          ),
        },
      },
    );
    return model;
  },
});
