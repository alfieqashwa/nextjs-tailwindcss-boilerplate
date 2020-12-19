const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      teal: colors.teal,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
