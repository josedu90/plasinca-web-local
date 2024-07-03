export default definePage({
  name: 'talent',
  view: {
    bundle: 'talent',
    template: 'MainTalent',
  },
  locales: {
    'es-ec': {
      url: '/talent',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/talent/seo`).fetch();
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
