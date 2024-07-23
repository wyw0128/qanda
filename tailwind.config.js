/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}', // Add this line to include Storybook files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
