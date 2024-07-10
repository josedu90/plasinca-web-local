export default definePage({
  name: 'notFound',
  view: {
    bundle: '_default',
    template: 'Main404',
  },
  locales: {
    'es-ec': {
      url: '/404',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/error/seo`).fetch();
        return {
          ...seo,
          twitterSite: '',
          google: true,
          twitter: true,
          facebook: true,
        };
      },
      context: async () => {
        return {};
      },
    },
  },
});
