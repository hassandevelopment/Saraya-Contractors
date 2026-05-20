import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  '#FAFAF8',
          100: '#F5F1EB',
          200: '#EAE3D6',
          300: '#D9CFC0',
          400: '#C4B8A6',
        },
        charcoal: {
          900: '#18140F',
          800: '#252019',
          700: '#3A332A',
          600: '#4E4438',
          500: '#6B5F52',
        },
        terra: {
          400: '#D47848',
          500: '#BF6030',
          600: '#A85228',
          700: '#8C4420',
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
