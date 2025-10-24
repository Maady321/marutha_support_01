/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        marutha: {
          50: '#f4fbff',
          100: '#eaf7ff',
          200: '#cfeeff',
          300: '#b4e6ff',
          400: '#7fd1ff',
          500: '#3fbfff',
          600: '#2f9fe6',
          700: '#247ab8',
          800: '#1b5b8a',
          900: '#123b59'
        },
        healing: '#8fd3bd',
        lavender: '#cdb4db'
      }
    }
  },
  plugins: []
}