/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        inactive: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          accent: 'hsl(var(--border-accent))',
          hover: 'hsl(var(--border-hover))',
          active: 'hsl(var(--border-active))',
          validation: 'hsl(var(--border-validation))',
          'active-tint': 'hsl(var(--border-active-tint))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        action: {
          DEFAULT: 'hsl(var(--action))',
          foreground: 'hsl(var(--action-foreground))',
          primary: 'var(--action-primary)',
          secondary: 'var(--action-secondary)',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          foreground: 'hsl(var(--error-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface-3))',
          0: 'hsl(var(--surface-0))',
          1: 'hsl(var(--surface-1))',
          2: 'hsl(var(--surface-2))',
          3: 'hsl(var(--surface-3))',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--background': '0 0% 95%', // Lighter background for default theme
          '--foreground': '0 0% 10%', // Darker text for contrast
          '--card': '0 0% 100%',
          '--card-foreground': '0 0% 10%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '0 0% 10%',
          '--primary': '34 100% 45%', // Warm orange-red for autumn feel
          '--primary-foreground': '0 0% 98%',
          '--secondary': '30 20% 80%', // Warm beige
          '--secondary-foreground': '30 25% 25% / 0.75',
          '--muted': '0 0% 85%',
          '--muted-foreground': '0 0% 40%',
          '--accent': '34 60% 45%', // Autumn-inspired accent color (yellow-orange)
          '--accent-foreground': '0 0% 15%',
          '--destructive': '0 80% 55%', // Red-orange for destructive elements
          '--destructive-foreground': '0 0% 98%',
          '--border': '0 0% 90%',
          '--input': '0 0% 90%',
          '--ring': '0 0% 3.9%',
          '--chart-1': '12 76% 61%',
          '--chart-2': '173 58% 39%',
          '--chart-3': '197 37% 24%',
          '--chart-4': '43 74% 66%',
          '--chart-5': '27 87% 67%',
          '--radius': '0.5rem',
          '--action': '34 100% 50%',
          '--action-foreground': '0 0% 98%',
          '--action-shadow': '205 100% 94%',
          '--success': '160 84% 39%',
          '--success-foreground': '0 0% 98%',
          '--error': '0 80% 50%',
          '--error-foreground': '0 0% 98%',
          '--surface-0': '0 0% 100%',
          '--surface-1': '220 33% 98%',
          '--surface-2': '220 21% 95%',
          '--surface-3': '216 23% 91%',
          '--border-accent': '240 5% 65%',
          '--border-hover': '216 23% 91%',
          '--border-active': '209 100% 50%',
          '--border-validation': '346 100% 50%',
          '--border-active-tint': '206 100% 91%',
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--background': '30 20% 10%',
            '--foreground': '25 20% 80%',
            '--card': '20 20% 20%',
            '--card-foreground': '25 14% 90%',
            '--popover': '20 20% 20%',
            '--popover-foreground': '25 14% 90%',
            '--primary': '30 100% 60%',
            '--primary-foreground': '0 0% 98%',
            '--secondary': '35 40% 45%',
            '--secondary-foreground': '20 40% 95%',
            '--muted': '20 40% 60%',
            '--muted-foreground': '25 20% 40%',
            '--accent': '10 50% 50%',
            '--accent-foreground': '0 0% 100%',
            '--destructive': '0 70% 60%',
            '--destructive-foreground': '0 0% 100%',
            '--border': '0 0% 40%',
            '--input': '0 0% 50%',
            '--ring': '0 0% 30%',
            '--chart-1': '0 60% 60%',
            '--chart-2': '30 60% 55%',
            '--chart-3': '60 60% 55%',
            '--chart-4': '90 60% 55%',
            '--chart-5': '120 60% 55%',
            '--action': '25 100% 60%',
            '--action-foreground': '0 0% 100%',
            '--success': '110 60% 40%',
            '--success-foreground': '0 0% 98%',
            '--error': '0 70% 60%',
            '--error-foreground': '0 0% 98%',
            '--surface-0': '30 20% 10%',
            '--surface-1': '30 25% 15%',
            '--surface-2': '30 30% 20%',
            '--surface-3': '30 35% 30%',
          },
        },
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      })
    }),
  ],
}
