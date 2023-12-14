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
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    })
  ],
}