export default definePage({
  name: 'contact',
  view: {
    bundle: 'contact',
    template: 'MainContact',
  },
  locales: {
    'es-ec': {
      url: '/contact',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/contact/seo`).fetch();
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
