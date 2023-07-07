module.exports = {
  plugins: {
    // postcss-import needs to be first plugin
    'postcss-import': {},
    autoprefixer: {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
}
