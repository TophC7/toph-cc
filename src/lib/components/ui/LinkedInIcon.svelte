<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements'

  let {
    size = 16,
    class: className = '',
    ...rest
  }: SVGAttributes<SVGSVGElement> & { size?: number | string } = $props()
</script>

<svg class={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
  <path
    fill="currentColor"
    d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
  />
</svg>
