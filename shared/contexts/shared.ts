export default defineSharedContext({
  async setup({ locale }) {
    // const page = { locale: 'es-ec' };
    // const req = { $content: queryContent };

    // const variable = await req
    //   .$content(`${page.locale}/carpeta/json`)
    //   .fetch();

    const products = await queryContent(`${locale.code}/pages/singleProducts`)
      .sortBy('slug', 'desc')
      .only(['url', 'image', 'name', 'slug'])
      .fetch();

    return {
      products,
      message: 'shared context',
    };
  },
});
