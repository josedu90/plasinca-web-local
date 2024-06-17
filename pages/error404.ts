export default definePage({
  name: 'notFound',
  view: {
    bundle: '_default',
    template: 'Main404',
  },
  locales: {
    'es-ec': {
      url: '/404',
      seo: () => ({
        title: '404',
        description: '',
        keywords: '',
        imageSocial: '/images/meta.jpg',
        twitterSite: '',
        google: true,
        twitter: true,
        facebook: true,
      }),
      context: async() => {
        return {};
      },
    },
  },
});
