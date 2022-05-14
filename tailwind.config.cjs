module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',
        accent: '#df5b53',
        complementary: '#53D7DF',
        offWhite: '#e5e4e7'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'courier-new': ['courier-new', 'monospace']
      },
    }
  },
  plugins: []
};