/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'slide-in-top': 'slide-in-top 0.3s ease-out',
        'particle-float': 'particle-float 10s infinite',
        'text-shimmer': 'text-shimmer 2s infinite',
        'button-pulse': 'button-pulse 2s infinite',
      },
      keyframes: {
        'slide-in-top': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 20px)' },
        },
        'text-shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'button-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      colors: {
        orange: {
          500: '#FF6B00',
          600: '#E65A00',
        },
        purple: {
          400: '#A855F7',
          500: '#8B5CF6',
          600: '#7C3AED',
          900: '#4C1D95',
        }
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
 }