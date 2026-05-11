/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
};