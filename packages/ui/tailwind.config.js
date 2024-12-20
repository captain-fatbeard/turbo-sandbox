/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('./src/lib/tailwind-presets.cjs')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/**/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [(await import('@shadcn/ui/tailwind')).default],
}
