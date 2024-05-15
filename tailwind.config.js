/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightest: '#E6E6E6',
        lighter: '#B0B0B0',
        light: '#6C6C6C',
        dark: '#3D3D3D',
        darker: '#292929',
        darkest: '#0D0D0D',
        glassDarkest: 'rgba(13, 13, 13, 0.6)',
        glassOrange: 'rgba(234, 88, 12, 0.6)',
      },
      fontFamily: {
        heading: ['Exo', 'sans-serif'],
        para: ['Mulish', 'sans-serif'],
        btn: ['Rubik', 'sans-serif'],
        fancyFont: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        loading: 'loading 1s linear infinite alternate',
      },
      keyframes: {
        loading: {
          '0%': { backgroundColor: '#3D3D3D' },
          '100%': { backgroundColor: '#292929' },
        },
      },
    },
  },
  plugins: [],
};
