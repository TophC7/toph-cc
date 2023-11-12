<script lang="ts">
  import { Envelope } from '$svg';
  import { clipboardEventHandler, copy, tooltip } from '$utils';
  import { getToastStore } from '@skeletonlabs/skeleton';

  export let tooltipPosition: App.Position = 'bottom';

  const toastStore = getToastStore();
  const copyHandler = clipboardEventHandler(toastStore);
  const EMAIL = 'chris@toph.cc';
  const tooltipProps: App.TooltipProps = {
    text: 'Copy email',
    color: 'surface',
    position: tooltipPosition
  };
</script>

<button
  class="variant-blur-surface btn-icon aspect-square w-full rounded-base group-hover:rounded-3xl"
  use:copy={EMAIL}
  on:copySuccess={copyHandler.handleCopySuccess}
  on:copyError={copyHandler.handleCopyError}
  use:tooltip={tooltipProps}>
  <Envelope height="60%" />
</button>
