/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor: "#FBF0E0",
      bgColor2: "#F5E1C7",
      green: "#3E8C67",
      greenDark: "#83AE9A",
      greenDark2: "rgba(131, 174, 154, 0.5)",
      greenDark3: "#26724E",
      yellow: "#F8BD61",
      fontColor: "#635B52",
      iFontColor: "#635B52",
      white: "#FFFFFF",
      black: "#131313",
    },
  },
  plugins: [],
};
