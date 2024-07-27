/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'arial': ['Arial', 'Helvetica', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
        'tahoma': ['Tahoma', 'Geneva', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'acme': ['Acme', 'sans-serif'],
        'alata':['alata','sans-serif']
      },
      colors: {
        'Color1': '#1A232C',
        'Color2': '#0F161C',
        'Color3': '#20CA5F',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-3': {
          clipPath: 'polygon(0% -4%, 60% 1%, 61% 34%, -1% 100%)',
        },
        '.clip-custom-1': {
          clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
