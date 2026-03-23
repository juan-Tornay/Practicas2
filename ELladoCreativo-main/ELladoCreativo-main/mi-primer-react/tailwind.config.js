/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleBlue: '#2563eb', // El azul de acción que definimos
      },
      borderRadius: {
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}