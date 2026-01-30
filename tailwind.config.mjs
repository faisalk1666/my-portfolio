/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme - soft warm day
        light: {
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          text: '#2C3E50',
          textSecondary: '#5A6C7D',
          accent: '#3B82F6',
          accentHover: '#2563EB',
          border: '#E5E7EB',
        },
        // Dark theme - calm night
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
          text: '#F1F5F9',
          textSecondary: '#94A3B8',
          accent: '#60A5FA',
          accentHover: '#3B82F6',
          border: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'snowfall': 'snowfall linear infinite',
        'rainfall': 'rainfall linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        snowfall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
        rainfall: {
          '0%': { transform: 'translateY(-40px)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
