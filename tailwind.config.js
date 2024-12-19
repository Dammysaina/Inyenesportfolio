/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'orange-strong': '#FF4500', // Example color
      },
      keyframes: {
        title: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(1.2)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        title: 'title 3s ease-out forwards',
        fadeIn: 'fadeIn 3s ease-in-out'
      },
    },
  },
  plugins: [],
}

