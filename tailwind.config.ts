import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teja: {
          50: '#fdf6f4',
          100: '#fbeae6',
          200: '#f6d5cc',
          300: '#eeb5a5',
          400: '#e38d75',
          500: '#d96d4f',
          600: '#c75234',
          700: '#a63f2a',
          800: '#893728',
          900: '#703226',
          950: '#3c1710',
        },
        cream: '#faf8f5',
        ink: '#1a1614',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,22,20,0.4) 0%, rgba(26,22,20,0.7) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
