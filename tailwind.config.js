/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neucha: "'neucha', cursive",
      },
      colors: {
        blue: {
          DEFAULT: "#2F74C0",
          50: "#B9D2EE",
          100: "#A8C8EA",
          200: "#88B3E2",
          300: "#679EDA",
          400: "#4689D2",
          500: "#2F74C0",
          600: "#245993",
          700: "#193E66",
          800: "#0E2239",
          900: "#03070C",
        },
      },
      boxShadow: {
        page: "0 0 10px 100vw rgba(0, 0, 0, 0.5)",
      },
      scale: {
        80: "0.8",
      },
    },
  },
  plugins: [],
};
