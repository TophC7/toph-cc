<script lang="ts">
  import { Link, Tooltip } from '$components/utils';

  export let SVG: App.SVGC;
  export let href: string;
  export let tooltip: string;
  export let tooltipPosition: App.Position;
  export let color: App.SkeletonColors = 'surface';
  export let selected: boolean = false;
  export let external: boolean = false;
  export { SVG as svg };

  $: currentColor = selected ? color : 'surface';
</script>

<Tooltip text={tooltip} position={tooltipPosition} color={currentColor}>
  <Link
    {href}
    class="btn-icon aspect-square w-full variant-blur-{currentColor} rounded-base group-hover:rounded-3xl"
    {external}>
    <svelte:component this={SVG} height="1.5rem" />
  </Link>
</Tooltip>
