import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050E1B',
        ink: {
          DEFAULT: '#0A1A2F',
          700: '#16324F',
          800: '#0F2440',
        },
        marigold: {
          DEFAULT: '#F4A300',
          600: '#D98E00',
          700: '#9A6500',
          100: '#FFF1CC',
        },
        mist: '#EEF1F5',
        steel: '#333A45',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 30px 70px -28px rgba(10, 26, 47, 0.45)',
        soft: '0 12px 30px -16px rgba(10, 26, 47, 0.25)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
