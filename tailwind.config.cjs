/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        // hero: "url('../public/images/hero.jpg')",
        gr1: "linear-gradient(90deg, rgba(2,0,36,0.50) 0%, rgba(0,0,0,0.50) 100%)",
        gr2: "linear-gradient(180deg, rgba(83,73,255,0.40379901960784315) 0%, rgba(119,215,255,0.4009978991596639) 100%);",
        gr3: "linear-gradient(90deg, rgba(2,0,36,0.40379901960784315) 0%, rgba(0,0,0,0.4009978991596639) 100%)",
      },
    },
    maxWidth: {
      container: "1280px",
    },
    boxShadow: {
      all: "0px 0px 30px -3px rgba(0,0,0,0.1)",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
