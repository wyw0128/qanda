/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}', // Add this line to include Storybook files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        ternary: 'var(--bg-ternary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        ternary: 'var(--text-ternary)',
        'error-color': {
          primary: 'var(--color-primary-error)',
        },
      },
      colors: {
        buttonPrimary: 'var(--color-button-primary)',
      },
    },
  },
  plugins: [],
};
