/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}