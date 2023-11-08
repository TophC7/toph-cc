<!--
  @component Tooltip

  This component displays a tooltip with the given text. The position and color of the tooltip can be customized. Uses the tailwind `group` class by default.
-->
<script lang="ts">
  /** The text to display in the tooltip. */
  export let text: string = '';
  /** The position of the tooltip relative to the element its wrapping.*/
  export let position: App.Position = 'bottom';
  /** The color variant of the tooltip. Can be 'surface', 'on-background', or 'on-primary'.*/
  export let color: App.SkeletonColors = 'surface';
</script>

<div class="tooltip-container group" role="tooltip">
  {#if text}
    <p class="tooltip tooltip-{position} variant-blur-{color} scale-0 group-hover:scale-100">
      {text}
    </p>
  {/if}
  <slot />
</div>

<style>
  .tooltip-container {
    height: inherit;
    width: inherit;
    position: relative;
    display: inherit;
  }

  .tooltip {
    @apply absolute z-50 w-max max-w-[8rem] rounded-base p-1 leading-none ring-inset;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .tooltip-top {
    @apply left-1/2 translate-x-[-50%];
    bottom: calc(100% + 0.75rem);
  }

  .tooltip-bottom {
    @apply left-1/2 translate-x-[-50%];
    top: calc(100% + 0.75rem);
  }

  .tooltip-left {
    @apply top-1/2 translate-y-[-50%];
    right: calc(100% + 0.75rem);
  }

  .tooltip-right {
    @apply top-1/2 translate-y-[-50%];
    left: calc(100% + 0.75rem);
  }
</style>
