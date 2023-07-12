/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./components/**/*.jsx', './pages/**/*.jsx'],
   theme: {
      extend: {
         colors: {
            red: '#ff0000',
            gray: '#808080',
         },
      },
      fontFamily: {
         sans: ['Helvetica', 'sans-serif'],
      },
      fontSize: {
         base: '1.5rem',
      },
   },
   plugins: [],
}
