import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1d',
        light: '#fdfdfb',
        gray: '#E2E0DF',
        red: '#D14338',
        orange: '#FF7A42',
        green: '#439158',
        pink: '#FF768B',
        blue: '#075571',
        violet: '#9081BC',
      },
    },
  },
  plugins: [],
};
export default config;
