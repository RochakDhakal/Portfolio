/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tiltprism: ["Tilt Prism"],
        oldstandardtt: ["Old Standard TT, serif"],
        wixmadefor: ["'Wix Madefor Text', sans-serif"],
        handlee: ["Handlee, cursive"],
        proxima: ["'Proxima Nova Condensed', sans-serif"],
        proximaextra: ["'Proxima Nova Extra Condensed, sans-serif"],
      },
    },
  },
  plugins: [],
};
