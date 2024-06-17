export default definePage({
  name: 'home',
  view: {
    bundle: '_default',
    template: 'MainHome',
  },
  locales: {
    'es-ec': {
      url: '/',
      seo: () => ({
        title: 'Home',
        description: '',
        keywords: '',
        imageSocial: '/images/meta.jpg',
        twitterSite: '',
        google: true,
        twitter: true,
        facebook: true,
      }),
      context: async() => {
        // const page = { locale: 'es-ec' };
        // const req = { $content: queryContent };

        // const variable = await req
        //   .$content(`${page.locale}/carpeta/json`)
        //   .fetch();

        return {
          autor: 'Autor dle código',
        };
      },
    },
  },
});
