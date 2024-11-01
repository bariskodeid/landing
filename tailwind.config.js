/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    color: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
    fontFamily: {
      sans: ['Genty', 'sans-serif'],
    },
  },
  plugins: [],
}

