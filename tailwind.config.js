/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['LatinModern', 'serif'],
        'sans-serif': ['LatinModernSans', 'sans-serif'],
      },
      fontSize: {
        'print-sm': '0.75rem',
        'print-base': '0.875rem',
        'print-lg': '1rem',
        'print-xl': '1.125rem',
      },
      spacing: {
        'print-1': '0.125rem',
        'print-2': '0.25rem',
        'print-3': '0.375rem',
        'print-4': '0.5rem',
      },
    },
  },
  plugins: [],
}
