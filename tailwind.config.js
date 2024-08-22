/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#312e81",
        secondaryColor: "#315e91",
    },
      backgroundImage:{
        "wallpaper-movies" : "url('../../assets/joker-wallpaper.jpg')"
      }
  },
  },
  plugins: [],
}