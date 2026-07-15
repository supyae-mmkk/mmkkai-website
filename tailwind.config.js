/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ---- Design tokens (visual redesign, feature/aeo-rebrand-deployable) ----
        // Dark surface scale (near-black charcoal, not pure #000)
        background: '#0B0D0F',
        surface: '#12151A',
        'surface-2': '#181C22',
        border: '#242931',
        // Light content-area scale (off-white, used for contrast sections)
        paper: '#F7F8F7',
        'paper-2': '#EFF1EF',
        ink: '#0B0D0F',
        // Brand accent - MMKK AI green - plus restrained cyan/blue highlight
        primary: '#00C896',
        'primary-dark': '#00A67D',
        secondary: '#3B9DFF',
        dark: '#0B0D0F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.5)',
        'card-light': '0 1px 2px rgba(15,20,25,0.06), 0 12px 32px -12px rgba(15,20,25,0.12)',
        glowsm: '0 0 0 1px rgba(0,200,150,0.25), 0 4px 20px -4px rgba(0,200,150,0.25)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dash': 'dash 1.4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00C896, 0 0 10px #00C896, 0 0 15px #00C896' },
          '100%': { boxShadow: '0 0 10px #00C896, 0 0 20px #00C896, 0 0 30px #00C896' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        dash: {
          to: { strokeDashoffset: -24 },
        },
      },
    },
  },
  plugins: [],
}
