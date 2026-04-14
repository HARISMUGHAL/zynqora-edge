/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050A18",
        primaryBase: "#1E90FF",
        secondaryBase: "#7B61FF",
        accentCyan: "#00E5FF",
        cardBg: "rgba(255, 255, 255, 0.05)",
        cardBorder: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['"Outfit"', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
