/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "functional-screens" : "400px",
        "chat-room" : '450px',
      }, height :{
        "header-footer-height": '8%',
        "message-area-height": '84%'
      }
    },
  },
  plugins: [],
}