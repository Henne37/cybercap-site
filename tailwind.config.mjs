/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A2540',
        'ink-soft': '#0E2C4A',
        teal: '#17B6A7',
        'teal-dark': '#0F9488',
        link: '#1E6FD9',
        slate: '#5B7083',
        mist: '#F5F8FA',
        cloud: '#E1E8ED',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
};
