const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{html,vue,eta,ts}',
    './pages/**/*.{ts,js}',
    './client/**/*.{vue,ts}',
    './content/**/*.{json,md}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {

    container: {
      center: true,
      padding: '13px',
      screens: {
        xl: '1356px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Latinotype', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      screens: {

      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            'max-width': '100%',
            'font-size': '1.25rem',
            'line-height': '1.4rem',
          },
        },
      }),
      colors: {
        'primary': '#021D49',
        'secundary': '#FF8300',
        'orange-100': '#F5A800',
        'orange-200': '#F8D887',
        'dark-100': '#1E1E1E',
        'gray-100': '#DEDEDE',
        'gray-200': '#EFEFEF',
        'gray-300': '#F7F7F7',
        'gray-400': '#C6C3C3',
        'green-100': '#81B658',
        'red-100': '#E57777',
        'blue-100': '#45ABF4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    function ({ addUtilities, variants }) {
      const fonts = {
        // Gotham
        '@font-face': [
          {
            'font-family': 'Latinotype',
            'font-style': 'bold',
            'font-weight': 700,
            'src': 'url(\'/fonts/latinotype-texta-bold.ttf\') format(\'truetype\')',
          },
          {
            'font-family': 'Latinotype',
            'font-style': 'medium',
            'font-weight': 500,
            'src': 'url(\'/fonts/TextaMedium.ttf\') format(\'truetype\')',
          },
          {
            'font-family': 'Latinotype',
            'font-style': 'light',
            'font-weight': 300,
            'src': 'url(\'/fonts/latinotype-texta-light.ttf\') format(\'truetype\')',
          },
          {
            'font-family': 'Latinotype',
            'font-style': 'normal',
            'font-weight': 400,
            'src': 'url(\'/fonts/latinotype-texta-regular.ttf\') format(\'truetype\')',
          },
        ],
      };

      addUtilities(fonts, variants('fontFamily'));
    },
  ],
};
