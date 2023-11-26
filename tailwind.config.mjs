import { fontFamily } from 'tailwindcss/defaultTheme'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
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
      fontFamily: {},
      fontSize: {
        '9xl': '6.5rem',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    aspectRatioPlugin,
    formPlugin,
    creightivePlugin({
      neutral: 'sage',
    }),
  ],
}
