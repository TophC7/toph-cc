<script lang="ts">
  import { tooltip } from '$utils';
  export let SVG: App.SVGC;
  export let tooltipText: string | undefined = undefined;
  export let tooltipPosition: App.Position | undefined = undefined;
  export let color: App.SkeletonColors;
  export let disabled: boolean = false;
  export { SVG as svg };

  const tooltipProps: App.TooltipProps = {
    color: color,
    text: tooltipText ?? '',
    position: tooltipPosition ?? 'bottom'
  };
</script>

<button
  on:click
  class="btn-icon aspect-square h-full w-full variant-blur-{color} rounded-base"
  use:tooltip={tooltipText ? tooltipProps : undefined}
  {disabled}>
  <svelte:component this={SVG} height="60%" width="60%" />
</button>
