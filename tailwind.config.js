/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgCard: "var(--bg-card)",
        borderColor: "var(--border)",
        accentBlue: "var(--accent-blue)",
        accentViolet: "var(--accent-violet)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--glow)",
      },
      animation: {
        'conic-spin': 'conic-spin 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        'conic-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'drift': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
