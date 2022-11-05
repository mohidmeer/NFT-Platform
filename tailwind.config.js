/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1c1326',
        'dark-2': '#120c18',
        'primary': '#7e5bef',
        'secondary': '#e1a2c9',
        'success': '#94c23d',
        'danger': '#f1553d',
        'warning': '#f59120',
        'info': '#69b5e1',
      },

      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }


    },
  },
  plugins: [],
}
