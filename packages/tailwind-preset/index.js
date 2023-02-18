/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '24px'],
      '2xl': ['24px', '28px'],
      '3xl': ['30px', '32px'],
      '4xl': ['36px', '36px'],
      '5xl': ['48px', '48px'],
      '6xl': ['60px', '60px'],
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
