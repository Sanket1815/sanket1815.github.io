/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a192f',
        },
        green: {
          DEFAULT: '#64ffda',
          50: '#f0fffe',
          100: '#ccfff7',
          200: '#99ffef',
          300: '#5effe4',
          400: '#1efdd4',
          500: '#00e4ba',
          600: '#00b89a',
          700: '#009179',
          800: '#007260',
          900: '#005e50',
        },
        slate: {
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
        }
      },
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
        sans: ['Inter', 'Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xxs': '12px',
        'xs': '13px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        'xxl': '22px',
        'heading': '32px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      },
      boxShadow: {
        'custom': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'custom-lg': '0 25px 50px -15px rgba(2, 12, 27, 0.7)',
      },
    },
  },
  plugins: [],
}