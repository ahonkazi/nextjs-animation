/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        LoopLeft: 'loopTextLeft 4s linear infinite'
      },
      keyframes: {
        loopTextLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        orange: '#ed7c50',
        darkOrange: '#d96d43',
        darkGrey: '#595959',
        lightGrey: '#8a8a8a',
        green: '#43ae61',
        purple: '#8566f6',
        turks: '#a6e2e3',
        red: '#e46060',
        black: '#282829',
        white: '#f5f4f5',
      },
      transitionProperty: {
        'height': 'height'
      },
      fontFamily: {
        Nunito: 'Nunito'
      }
    },
  },
  plugins: [],
}
