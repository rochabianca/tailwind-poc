module.exports = {
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      colors: {
        black: {
          '100': 'rgba(18,30,72, .1)',
          '200': 'rgba(#121E48, .2)',
          '300': 'rgba(#1D1D26, .3)',
          '400': 'rgba(#121E48, .4)',
          '500': 'rgba(#121E48, .5)',
          '600': 'rgba(#121E48, .6)',
          '700': 'rgba(#121E48, .7)',
          '800': 'rgba(#121E48, .8)',
          '900': 'rgba(#121E48, .9)',
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
