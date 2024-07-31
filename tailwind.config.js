/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}', // Add this line to include Storybook files
  ],
  theme: {
    extend: {
      colors: {
        loginBg: 'var(--login-bg)',
        primaryBg: 'var(--primaryBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
      },
    },
  },
  plugins: [],
};
