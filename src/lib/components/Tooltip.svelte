<script lang="ts">
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let text: string = '';

  let tooltipVisible = false;

  function handleMouse() {
    tooltipVisible = !tooltipVisible;
  }
</script>

<div class="tooltip-container" role="tooltip" on:mouseenter={handleMouse} on:mouseleave={handleMouse}>
  {#if tooltipVisible}
    <p class={`tooltip tooltip-${position}`}>{text}</p>
  {/if}

  <slot />
</div>

<style>
  .tooltip-container {
    position: relative;
    display: inherit;
  }

  .tooltip {
    @apply variant-soft absolute z-10 w-max max-w-[8rem] p-1 text-sm leading-none ring-inset ring-primary-500 backdrop-blur text-on-surface-token;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    border-radius: var(--theme-rounded-container);
    background-color: rgb(var(--color-surface-500) / 0.6) !important;
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
