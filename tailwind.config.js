/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      fontSize : {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg:['20px', '28px'],
        xl:['24px', '32px']
      },
      borderRadius: {
        xl: "10px"
      }
    },
  },
  plugins: [],
}