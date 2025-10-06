module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#ffffff', // Background-light
        'card-bg': '#f8f8f8', // Background-medium
        'text-primary': '#1a1a1a', 
        'text-secondary': '#606060',

        'accent-blue': {
          DEFAULT: '#004d99',  // The main dark blue
          'light': '#e6f0fa',  // Light fill/hover
          'dark': '#003a73',   // Darker for hover/active
        },
      },
    },
  },
  plugins: [],
}
