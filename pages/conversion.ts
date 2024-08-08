export default definePage({
  name: 'conversion',
  view: {
    bundle: '_default',
    template: 'MainConversion',
  },
  locales: {
    'es-ec': {
      url: '/conversiones',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/conversion/seo`).fetch();
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
