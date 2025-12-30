/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        verticalScroll: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-2688px)" },
        },
        horizontalScroll: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "vertical-scroll": "verticalScroll 40s linear infinite",
        "horizontal-scroll": "horizontalScroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};