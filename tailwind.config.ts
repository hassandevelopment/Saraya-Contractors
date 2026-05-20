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
          50:  '#F7F9FC',
          100: '#EEF2F9',
          200: '#D8E1F0',
          300: '#BAC9E3',
          400: '#96ADCF',
        },
        navy: {
          900: '#020618',
          800: '#050B3F',
          700: '#0A1260',
          600: '#112080',
          500: '#1C309A',
        },
        terra: {
          400: '#E8B84B',
          500: '#D4A017',
          600: '#B88912',
          700: '#9A720F',
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
