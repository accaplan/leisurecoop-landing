module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'embla',
      'embla__viewport',
      'embla__container',
      'embla__slide',
      'embla__container'
    ]
  },
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['SelectricMono', 'sans-serif'],
      'display': ['SelectricRoman', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000000',
        'off-black': '#494949',
        'white': '#FFFFFF',
        'blue': '#00206e',
      }
    },
  },
  variants: {
    transitionProperty: ['hover', 'focus'],
    transform: ['hover', 'group-hover'],
  },
  plugins: []
}