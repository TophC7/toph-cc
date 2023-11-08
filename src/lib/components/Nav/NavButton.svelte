<script lang="ts">
  import { Tooltip } from '$components/utils';

  export let SVG: App.SVGC;
  export let tooltip: string;
  export let tooltipPosition: App.Position = 'right';
  export let color: App.SkeletonColors;
  export let disabled: boolean = false;

  export { SVG as svg };
</script>

<Tooltip text={tooltip} position={tooltipPosition} {color}>
  <button
    on:click
    class="btn-icon aspect-square w-full variant-blur-{color} rounded-base group-hover:rounded-3xl"
    {disabled}>
    <svelte:component this={SVG} width="1.5rem" />
  </button>
</Tooltip>
