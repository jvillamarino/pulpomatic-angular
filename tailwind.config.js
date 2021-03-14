
module.exports = {
    prefix: '',
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      container: {
        center: true
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
