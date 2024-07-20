/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
      colors: {
        primary: '#594ED2',
        secondary: '#5A84C0',
        'black-neutral': '#1C1C1C',
        'gray-neutral-00': '#F0F0F0',
        'gray-neutral-10': '#DFDFDF ', 
        'gray-neutral-20': '#9E9E9E'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #5A84C0, #594ED2)',
      },
      fontSize: {
        'h1': ['24px', { fontWeight: '500' }],
        'h2': ['16px', { fontWeight: '500' }],
        'h3': ['16px', { fontWeight: '400' }],
      },
      spacing: {
        'spacing-medium-80': '80px',
        'spacing-medium-60': '60px',
        'spacing-medium-40': '40px',
        'spacing-medium-32': '32px',
        'spacing-regular-28': '28px',
        'spacing-regular-20': '20px',
        'spacing-regular-16': '16px',
        'spacing-little-08': '8px',
        'spacing-little-04': '4px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.custom-placeholder::placeholder': {
          color: '#9E9E9E',
        },
      }, ['responsive', 'hover']);
    }),
  ],
}

