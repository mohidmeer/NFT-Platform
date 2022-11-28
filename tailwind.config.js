/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'app': '#EAEAE9',
        'dark': '#FFFFFF',
        'dark-2': '#FFFFFF',
        'pink-600': '#55b947',
        'pink-700': '#55b947',
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',
        'instagram': '#833AB4',
        'discord': '#7289da',
        'pintrest': '#E60023',
        'telegram': ' #229ED9',
        'reddit': '#FF5700',
        
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
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
