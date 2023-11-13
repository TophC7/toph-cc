<!--
  @component ### Tooltip
  Displays a short message when the user hovers over an element.   
  The tooltip is a singleton component that is triggered by the use:tooltip directive.
-->
<script lang="ts">
  import { storeTooltip } from '$utils/stores';

  let text: string;
  let color: App.SkeletonColors;
  let position: App.Position;
  let open: boolean;
  let anchorPosition: DOMRect;
  let dialogPosition: string;

  $: {
    let anchor = $storeTooltip?.anchor ?? null;
    text = $storeTooltip?.text ?? '';
    color = $storeTooltip?.color ?? 'surface';
    position = $storeTooltip?.position ?? 'bottom';

    if (anchor) {
      open = true;
      anchorPosition = anchor.getBoundingClientRect();
      dialogPosition = getPosition();
    } else {
      open = false;
    }
  }

  function getPosition() {
    const distance = '0.75em';
    let top, left;
    switch (position) {
      case 'top':
        top = anchorPosition.top;
        left = anchorPosition.left + anchorPosition.width / 2;
        return `top: calc(${top}px - ${distance}); left: ${left}px; transform: translateX(-50%) translateY(-100%);`;
      case 'bottom':
        top = anchorPosition.top + anchorPosition.height;
        left = anchorPosition.left + anchorPosition.width / 2;
        return `top: calc(${top}px + ${distance}); left: ${left}px; transform: translateX(-50%);`;
      case 'left':
        top = anchorPosition.top + anchorPosition.height / 2;
        left = anchorPosition.left;
        return `top: ${top}px; left: calc(${left}px - ${distance}); transform: translateX(-100%) translateY(-50%);`;
      case 'right':
        top = anchorPosition.top + anchorPosition.height / 2;
        left = anchorPosition.left + anchorPosition.width;
        return `top: ${top}px; left: calc(${left}px + ${distance}); transform: translateY(-50%);`;
    }
  }
</script>

<dialog class="tooltip variant-blur-{color}" style={dialogPosition} {open}>
  {text}
</dialog>

<style>
  .tooltip {
    @apply fixed z-[60] m-0 max-w-[9em] rounded-base p-1 leading-none ring-inset;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
</style>
