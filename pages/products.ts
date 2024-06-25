export default definePage({
  name: 'products',
  view: {
    bundle: 'products',
    template: 'MainProducts',
  },
  locales: {
    'es-ec': {
      url: '/products',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/products/seo`).fetch();
        return {
          ...seo,
          twitterSite: '',
          google: true,
          twitter: true,
          facebook: true,
        };
      },
      context: async () => {
        // const page = { locale: 'es-ec' };
        // const req = { $content: queryContent };

        // const variable = await req
        //   .$content(`${page.locale}/carpeta/json`)
        //   .fetch();

        return {
          autor: 'Andrés Acosta',
        };
      },
    },
  },
});
