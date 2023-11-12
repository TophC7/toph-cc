<script lang="ts">
  import { tooltip } from '$utils';
  export let SVG: App.SVGC;
  export let tooltipText: string;
  export let tooltipPosition: App.Position = 'right';
  export let color: App.SkeletonColors;
  export let disabled: boolean = false;
  export { SVG as svg };

  const tooltipProps: App.TooltipProps = {
    color: color,
    text: tooltipText,
    position: tooltipPosition
  };
</script>

<button
  on:click
  class="btn-icon aspect-square w-full variant-blur-{color} rounded-base"
  use:tooltip={tooltipProps}
  {disabled}>
  <svelte:component this={SVG} height="60%" />
</button>
