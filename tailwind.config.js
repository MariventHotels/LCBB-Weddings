/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      opensans: ['Open Sans', 'sans-serif'],
      futura: ['Futura', 'sans-serif']
    },
    screens: {
      "2xl": { min: "1535px" },

      xxl: { max: "1550px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1137px" },
      // => @media (max-width: 1023px) { ... }

      xmd: { max: "852px" },

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "686px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "582px" },
      xxsm: { max: "485px" },
      xxxsm: {max: "331px"},
      xxxxsm: {max: "357px"},
    },
    extend: {

      borderRadius: {
        '50': '10px',
      },
      boxShadow: {
        'custom': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

