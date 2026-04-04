/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a2744',
          light: '#0f3460',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#d9bc74',
          dark: '#a8873a',
        },
        grey: {
          50: '#f5f5f5',
          200: '#dddddd',
          500: '#555555',
          700: '#333333',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
