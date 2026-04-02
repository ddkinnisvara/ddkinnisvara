import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0C0B09',
        bg2: '#131210',
        bg3: '#1A1917',
        gold: '#C8A96E',
        'gold-light': '#DFC08A',
        'gold-dim': '#8A7147',
        'off-white': '#F2EFE9',
        muted: '#6B6560',
        muted2: '#4A4643',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
        space: ['var(--font-space)', 'monospace'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
