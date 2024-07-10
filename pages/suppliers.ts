export default definePage({
  name: 'suppliers',
  view: {
    bundle: 'talent',
    template: 'MainTalent',
  },
  locales: {
    'es-ec': {
      url: '/proveedores',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/suppliers/seo`).fetch();
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
