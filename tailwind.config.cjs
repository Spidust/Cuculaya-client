/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./***/**/*.{html,jsx}"],
  theme: {
    minHeight: {
      "card": "380px"
    },
    extend: {
      color: {
        dark: "#343a40",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
