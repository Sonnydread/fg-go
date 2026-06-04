/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Agrega esto si tienes más carpetas comunes:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)"],
      },
      // Aquí puedes agregar más extensiones si las necesitas
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    // Agrega aquí otros plugins
  ],
};