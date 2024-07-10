export default definePage({
  name: 'about',
  view: {
    bundle: 'about',
    template: 'MainAbout',
  },
  locales: {
    'es-ec': {
      url: '/quienes-somos',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/about/seo`).fetch();
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
