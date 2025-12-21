/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
    extend: {
      fontFamily: {
       sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [
    // ... otros plugins
    require("tailwindcss-animate"),  
  ],
};
