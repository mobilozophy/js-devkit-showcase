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
        primary: {
          DEFAULT: '#064e3b',
          light: '#047857'
        },
        secondary: {
          DEFAULT: '#b45309',
          light: '#d97706'
        },
        neutral: {
          DEFAULT: '#e5e7eb',
          dark: '#d6d3d1'
        },
        accent: {
          DEFAULT: '#374151',
          light: '#4b5563'
        }
      },
    },
  },
  plugins: [],
}