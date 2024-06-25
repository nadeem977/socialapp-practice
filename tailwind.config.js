/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
         'gray1':"#BCBCBC",
         'green':"#1CAC19"
      }
    },
  },
  plugins: [],
}