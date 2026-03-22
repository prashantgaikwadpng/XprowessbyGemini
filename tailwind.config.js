/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neonCyan: '#00f7ff',
        neonPurple: '#b000ff',
        darkBg: '#050508',
        glassBg: 'rgba(255, 255, 255, 0.03)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 247, 255, 0.5), 0 0 10px rgba(176, 0, 255, 0.5)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 247, 255, 0.8), 0 0 30px rgba(176, 0, 255, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
