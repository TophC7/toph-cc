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
    switch (position) {
      case 'top':
        return `top: ${anchorPosition.top}px; left: ${anchorPosition.left}px;`;
      case 'bottom':
        return `bottom: ${anchorPosition.bottom + 8}px; left: ${anchorPosition.left + anchorPosition.width / 2}px;}`;
      case 'left':
        return `left: ${anchorPosition.left - 8}px; top: ${anchorPosition.top + anchorPosition.height / 2}px;`;
      case 'right':
        return `right: ${anchorPosition.right + 8}px; top: ${anchorPosition.top + anchorPosition.height / 2}px;`;
    }
  }
</script>

<dialog class="tooltip variant-blur-{color}" style={dialogPosition} {open}>
  {text}
</dialog>

<style>
  .tooltip {
    @apply fixed z-[60] max-w-[8rem] rounded-base p-1 leading-none ring-inset;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
</style>
