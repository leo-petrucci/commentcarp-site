const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './src/_includes/**/*.njk',
      './src/**/*.ts',
      // etc.
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: colors.orange,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'koi-orange-base': '#EF7B48',
        'koi-orange-light': '#F7DACE',
        'koi-gray': '#3A3A3A',
      },
      transitionProperty: {
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
