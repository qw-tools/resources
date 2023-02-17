/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1em",
        sm: "0",
      },
    },
    extend: {},
  },
  plugins: [],
};
