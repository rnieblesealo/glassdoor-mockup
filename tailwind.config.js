/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // WARN: careful with spaces in patternmatch!
  ],
  theme: {
    extend: {
      colors: {
        red: "#ac2847",
        green: "#26854c",
        black: "#10121c",
        white: "#ffffff",
        blue: "#3388de",
        yellow: "#f3a833",
        gray: "#dadada",
        salmon: "#fa6e79"
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        tiny5: ["Tiny5", "serif"]
      }
    },
  },
  plugins: [],
}

