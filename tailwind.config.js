const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './apps/clinic/**/*.html',
        './apps/clinic/**/*.ts'
       
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require("@tailwindcss/forms")({
      strategy: 'solid',
    }),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
