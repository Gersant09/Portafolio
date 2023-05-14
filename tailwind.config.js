/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-d": "#181823",
        "green-d": "#10FFF1"
      }
    },
  },
  plugins: [],
}

