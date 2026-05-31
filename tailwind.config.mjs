/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        accent: '#0f766e',
        'accent-hover': '#115e59',
        'accent-d': '#5eead4',
        'accent-d-hover': '#99f6e4',
      },
    },
  },
  plugins: [],
};
