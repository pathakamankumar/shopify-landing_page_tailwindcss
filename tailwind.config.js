/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        direction:'up',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
