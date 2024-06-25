export const media = {
  shared: {
    media_folder: '/public/images/shared/',
    public_folder: '/images/shared/',
  },
  home: {
    media_folder: '/public/images/home/',
    public_folder: '/images/home/',
  },
  iconos: {
    media_folder: '/public/images/iconos/',
    public_folder: '/images/iconos/',
  },
  products: {
    media_folder: '/public/images/products/',
    public_folder: '/images/products/',
  },
};

export const notNested = {
  notNested: true,
};

export function linkOrButton(widgets: any) {
  return {
    type: widgets.select({
      options: [
        { value: 'mk', label: 'Paginas internas' },
        { value: 'a', label: 'Páginas externas' },
      ],
      extraOptions: {
        emitValue: true,
      },
    }),
    url: widgets.select({
      options: [],
      extraOptions: {
        list: 'pages',
        show: {
          type: 'mk',
        },
      },
    }),
    urlExt: widgets.string({
      extraOptions: {
        alias: 'url',
        show: {
          type: 'a',
        },
      },
    }),
    blank: widgets.boolean({
      extraOptions: {
        show: {
          type: 'a',
        },
      },
    }),
  };
}

export function seoFields(widgets: any, folder = '/') {
  return {
    title: widgets.string({ label: 'Título' }),
    description: widgets.string({ label: 'Descripción' }),
    keywords: widgets.string({ label: 'Palabras clave' }),
    imageSocial: widgets.image({
      label: 'Imagen para cuando se comparte en redes',
      media_folder: `/public/assets/images${folder}`,
      public_folder: `/assets/images${folder}`,
      hint: 'Medidas sugeridas: 1200px * 650px',
    }),
  };
}
