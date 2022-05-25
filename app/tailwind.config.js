/* eslint-disable import/no-extraneous-dependencies */

const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
  ],
};
