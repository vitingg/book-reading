/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rodrigo: ["Inter", "sans-serif"],
      },
      backgroundColor: {},
      colors: {},
      keyframes: {
        growFadeIn: {
          "0%": {
            opacity: "0",
            width: "0",
          },
          "100%": {
            opacity: "1",
            width: "18.75rem",
          },
        },
      },
      animation: {
        growFadeIn: "growFadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
