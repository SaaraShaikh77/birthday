/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ec4899',   // Pink for love theme
        secondary: '#8b5cf6', // Purple accent
        accent: '#f59e0b',    // Warm accent
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enables dark mode
}
