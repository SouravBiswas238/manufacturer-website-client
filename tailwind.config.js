module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2e3192",

          "secondary": "#627fd6",

          "accent": "#d09aed",

          "neutral": "#263340",

          "base-100": "#FCFCFD",

          "info": "#5B80D7",

          "success": "#1BA75C",

          "warning": "#F1AC4B",

          "error": "#FA1E51",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}