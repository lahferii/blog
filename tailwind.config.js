/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./public/*.html",
    "./themes/**/layouts/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily :{ 
        helvetica: ["helvetica", "serif"], 
      } 
    },
  },
  plugins: [],
}

