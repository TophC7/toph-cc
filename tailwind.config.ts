import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import { croissant } from './src/lib/utils';

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'Satoshi', 'Alpino', 'sans-serif'],
        Satoshi: ['Satoshi', 'Inter', 'Alpino', 'sans-serif'],
        Alpino: ['Alpino', 'Inter', 'Satoshi', 'sans-serif']
      }
    }
  },
  plugins: [
    skeleton({
      themes: {
        custom: [croissant],
        preset: [{ name: 'gold-nouveau', enhancements: true }]
      }
    })
  ]
} satisfies Config;

export default config;
