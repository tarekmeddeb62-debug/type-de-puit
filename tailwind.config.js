/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        vibrant: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          yellow: '#eab308',
          teal: '#14b8a6',
        }
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-forest': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      },
      boxShadow: {
        'vibrant': '0 10px 40px rgba(139, 92, 246, 0.3)',
        'vibrant-lg': '0 20px 60px rgba(139, 92, 246, 0.4)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
      },
    },
  },
  plugins: [],
}
