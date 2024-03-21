/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Arial', 'Helvetica', 'sans-serif']
      },
      width: {
        main: '1100px',
      },
      backgroundColor: {
        main: '#1266dd',
        secondary: '#f73859',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',
      },
      textColor: {
        main: '#1266dd',
        secondary: '#f73859'
      },
      borderColor: {
        main: '#1266dd'
      },
      keyframes: {
        'slide-bottom': {
          '0%': {
            '-webkit-transform': 'translateY(0);',
            transform: 'translateY(0);'
          },
          '100%': {
            '-webkit-transform': 'translateY(10px);',
            transform: 'translateY(10px);'
          }
        },
      },
      animation: {
        'slide-bottom': 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    })
  ],
}