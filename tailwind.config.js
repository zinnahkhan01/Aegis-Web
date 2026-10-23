/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050811',
          50: '#0f172a',
          100: '#0d1527',
          200: '#090e1a',
          300: '#070b16',
          400: '#050811',
          900: '#020409',
        },
        cyan: {
          electric: '#00F2FF',
          glow: 'rgba(0, 242, 255, 0.4)',
        },
        violet: {
          royal: '#7C3AED',
          glow: 'rgba(124, 58, 237, 0.4)',
        },
        neon: {
          green: '#10B981',
          cyan: '#00F2FF',
          purple: '#A855F7',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 242, 255, 0.35)',
        'glow-violet': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'glow-combined': '0 0 40px -10px rgba(0, 242, 255, 0.25), 0 0 40px -10px rgba(124, 58, 237, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
