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
        'pink-600': '#00A300',
        'pink-700': '#00A300',
        
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
