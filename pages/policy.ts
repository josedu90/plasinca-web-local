export default definePage({
  name: 'policy',
  view: {
    bundle: 'policy',
    template: 'MainPolicy',
  },
  locales: {
    'es-ec': {
      url: '/policy',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/policy/seo`).fetch();
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
