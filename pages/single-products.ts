export default defineDynamicPage({
  name: 'single-products',
  view: {
    bundle: 'singleProducts',
    template: 'SingleProducts',
  },
  locales: {
    'es-ec': {
      url: '/products/**',
      seo: ({ dynamic }) => {
        return {
          ...dynamic.context?.seo,
        };
      },
      dynamic: {
        method: async ({ locale }) => {
          //
          const products = await queryContent(`${locale.code}/pages/singleProducts`).fetch();
          return products.map((page: { slug: any; url: any }) => {
            return {
              name: page.slug,
              slug: page.slug,
              context: page,
              url: page.url,
            };
          });
        },
      },
      context: async ({ dynamic }) => {
        const data = dynamic.context;
        return {
          data,
          autor: 'Andrés Acosta',
        };
      },
    },
  },
});
