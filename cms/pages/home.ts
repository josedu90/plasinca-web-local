export default defineCmsCollection({
  dir: 'home',
  group: 'pages',
  setup({ widgets, collections }) {
    const files = {
      section1: collections.file({
        label: 'Banner',
        fields: {
          top: widgets.string({ label: 'Título', required: true }),
          txt: widgets.string({ label: 'Texto', required: false }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Home',
        files,
      },
    );
    return model;
  },
});
