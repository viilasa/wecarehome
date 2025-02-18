/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#F5F1EA',
          DEFAULT: '#F8F4ED',
          dark: '#8B7355',
        }
      },
    },
  },
  plugins: [],
};