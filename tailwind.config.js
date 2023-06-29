/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mobileTheme: {

          primary: "#E3B448",

          secondary: "#CBD28F",

          accent: "#3A6B34",

          neutral: "#110E0E",

          "base-100": "#FFFFFF"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}

