module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('assets/pattern-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
