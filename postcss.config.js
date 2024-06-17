const flowPresets = require('@monkeyplus/flow-presets/postcss');

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
  },
};
