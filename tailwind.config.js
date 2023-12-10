/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "#ed6761",
        red: "#e84139",
        purple: "#a86790",
        midnight: "#121063",
        metal: "#565584",
      },
    },
  },
  plugins: [require("daisyui")],
};
