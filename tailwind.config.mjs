import formPlugin from '@tailwindcss/forms'
import { creightivePlugin } from '@bitwhys/tailwindcss-plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#0E1010',
      },
    },
  },
  plugins: [
    formPlugin,
    creightivePlugin({
      neutral: 'sage',
    }),
  ],
}
