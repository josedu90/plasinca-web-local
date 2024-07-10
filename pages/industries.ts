export default definePage({
  name: 'industries',
  view: {
    bundle: 'industries',
    template: 'MainIndustries',
  },
  locales: {
    'es-ec': {
      url: '/industrias',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/industries/seo`).fetch();
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
