/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@acme/tailwind-preset')],
  content: [
    './components/*.{vue,js,ts,jsx,tsx}',
    './pages/*.{vue,js,ts,jsx,tsx}']
}
