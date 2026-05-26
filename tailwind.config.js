/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './projects/*.html',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#080808',
        'canvas-soft': '#0c0c0c',
        surface: '#111111',
        'surface-hover': '#1a1a1a',
        elevated: '#1c1c1c',
        'border-subtle': '#1f1f1f',
        'border-hover': '#404040',
        'border-strong': '#333333',
        'text-primary': '#fafafa',
        'text-body': '#d4d4d4',
        'text-muted': '#a3a3a3',
        'text-subtle': '#737373',
        accent: {
          emerald: '#34d399',
          amber: '#fbbf24',
          blue: '#60a5fa',
          rose: '#f87171',
        },
        cta: {
          bg: '#fafafa',
          text: '#080808',
          hover: '#e5e5e5',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 8vw, 5.75rem)', { lineHeight: '0.88', letterSpacing: '-0.065em', fontWeight: '600' }],
        h1: ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '600' }],
        h2: ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '600' }],
        h3: ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      spacing: {
        section: 'clamp(3rem, 10vw, 6rem)',
      },
      borderRadius: {
        card: '1.5rem',
        button: '0.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};