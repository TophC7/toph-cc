<script lang="ts">
  import { Tooltip } from '$components/utils';
  import { clipboardEventHandler, copy } from '$lib/utils';
  import { Envelope } from '$svg';
  import { getToastStore } from '@skeletonlabs/skeleton';

  const toastStore = getToastStore();
  const copyHandler = clipboardEventHandler(toastStore);
  const EMAIL = 'chris@toph.cc';
</script>

<Tooltip text="Copy Email" position="right">
  <button
    use:copy={EMAIL}
    on:copySuccess={copyHandler.handleCopySuccess}
    on:copyError={copyHandler.handleCopyError}
    class="variant-blur-surface btn-icon aspect-square w-full rounded-base group-hover:rounded-3xl">
    <Envelope width="1.5rem" />
  </button>
</Tooltip>
