/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      },
      colors: {
      },
      keyframes: {
        growFadeIn: {
          '0%': {
            opacity: '0',
            width: '0',
          },
          '100%': {
            opacity: '1',
            width: '18.75rem', // ou '300px'
          },
        },
      },
      animation: {
        growFadeIn: 'growFadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}