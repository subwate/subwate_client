module.exports = {
  plugins: {
    'postcss-import': {
      path: ['node_modules/swiper'],
    },
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {},
  },
};
