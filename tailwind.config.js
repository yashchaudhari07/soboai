/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plex-hebrew': ['IBM Plex Sans Hebrew', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
