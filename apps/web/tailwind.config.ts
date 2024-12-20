import path from 'path'
import type { Config } from 'tailwindcss'

export default {
  presets: [require('@repo/ui/lib/tailwind-presets')],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    path.join(path.dirname(require.resolve('@repo/ui/lib/tailwind-presets')), '../**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
