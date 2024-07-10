export default definePage({
  name: 'clients',
  view: {
    bundle: 'clients',
    template: 'MainClients',
  },
  locales: {
    'es-ec': {
      url: '/clientes',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/clients/seo`).fetch();
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
