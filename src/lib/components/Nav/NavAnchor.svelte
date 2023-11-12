<script lang="ts">
  import { linkOut, tooltip } from '$utils';

  let SVG: App.SVGC;
  export let href: string;
  export let tooltipText: string;
  export let tooltipPosition: App.Position;
  export let color: App.SkeletonColors = 'surface';
  export let selected: boolean = false;
  export let external: boolean = false;
  export { SVG as svg };

  let colorState: App.SkeletonColors = selected ? color : 'surface';
  let tooltipProps: App.TooltipProps = {
    text: tooltipText,
    color: colorState,
    position: tooltipPosition
  };

  $: {
    colorState = selected ? color : 'surface';
    tooltipProps.color = colorState;
  }
</script>

<a
  {href}
  class="btn-icon aspect-square h-full w-full variant-blur-{colorState} rounded-base"
  use:linkOut={external ? href : undefined}
  use:tooltip={tooltipProps}>
  <svelte:component this={SVG} height="60%" />
</a>
