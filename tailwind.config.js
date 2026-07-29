/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12151C',
        'ink-soft': '#1B2029',
        paper: '#F7F8FA',
        signal: '#4B5FFF',
        'signal-dark': '#3846D6',
        volt: '#2FD98A',
        amber: '#FFB020',
        slate: {
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
