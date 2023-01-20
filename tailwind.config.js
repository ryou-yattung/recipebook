/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        resBg: "url('../public/resBg.png')",
      },
    },
    colors: {
      bgColor: "#FBF0E0",
      green: "#3E8C67",
      greenDark: "#83AE9A",
      yellow: "#F8BD61",
      fontColor: "#635B52",
      iFontColor: "#635B52",
      white: "#FFFFFF",
      black: "#131313",
    },
  },
  plugins: [],
};
