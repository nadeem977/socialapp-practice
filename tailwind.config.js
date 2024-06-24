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
        'primary-bg': '#121212',
        'secondary-bg': '#1E1E1E',
        'card-bg': '#2A2A2A',
        'primary-text': '#FFFFFF',
        'secondary-text': '#B3B3B3',
        'accent': '#BB86FC',
        'button-bg': '#3C3C3C',
        'button-hover': '#333333',
        'border-color': '#373737',

        'green':"#1CAC19"
      }
    },
  },
  plugins: [],
}