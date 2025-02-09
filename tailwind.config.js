/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // WARN: careful with spaces in patternmatch!
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

