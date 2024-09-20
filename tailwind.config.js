/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#F7941D',
        secondary: '#78278B',
        accent: '#CBDB2A',
        base: '#333333',
      },
    },
  },
  plugins: [],
}