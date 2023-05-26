/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Noto': ['Noto Serif', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/homepage.jpg')",
      }
    },
  },
  plugins: [],
}

