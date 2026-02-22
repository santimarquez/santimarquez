/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#00A3B5',
          muted: '#007B8A',
        },
        charcoal: {
          DEFAULT: '#2C3E50',
          light: '#333333',
        },
        offwhite: '#F9F9F9',
      },
    },
  },
  plugins: [],
};
