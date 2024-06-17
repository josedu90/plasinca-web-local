export default defineSharedContext({
  async setup() {
    // const page = { locale: 'es-ec' };
    // const req = { $content: queryContent };

    // const variable = await req
    //   .$content(`${page.locale}/carpeta/json`)
    //   .fetch();

    return {
      message: 'shared context',
    };
  },
});
