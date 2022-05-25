const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    tailwindcss: {},
    ...(isProductionMode ? { autoprefixer: {} } : {}),
    ...(isProductionMode ? { cssnano: {} } : {}),
  },
};
