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
      size: {
        'custom-size-08': '2.12rem'
      },
      boxShadow: {
       'custom-10': '0 4px 4px 0 #00000025',
       'custom-00': '0 1px 2px 0 #00000020'
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
        'h1': ['2rem', { fontWeight: '500' }],
        'h2': ['1rem', { fontWeight: '500' }],
        'h3': ['1rem', { fontWeight: '400' }],
      },
      spacing: {
        'spacing-medium-80': '5rem',
        'spacing-medium-60': '3.75rem',
        'spacing-medium-40': '2.5rem',
        'spacing-medium-32': '2rem',
        'spacing-regular-28': '1.75rem',
        'spacing-regular-20': '1.25rem',
        'spacing-regular-16': '1rem',
        'spacing-little-08': '0.5rem',
        'spacing-little-04': '0.25rem',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.custom-placeholder::placeholder': {
          color: '#9E9E9E',
        }
      }, ['responsive', 'hover']);
    }),
  ],
}

