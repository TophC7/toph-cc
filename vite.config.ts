import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    svg({
      svgoOptions: {
        multipass: true,
        plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }]
      },
      type: 'component'
    })
  ],
  server: {
    port: 4000
  }
});
