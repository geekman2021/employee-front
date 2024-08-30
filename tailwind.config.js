const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [".src/**/*.{html, js, ts, jsx, tsx}", flowbite.content()],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [flowbite.plugin()],
};
