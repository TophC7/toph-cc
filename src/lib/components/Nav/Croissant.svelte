<script lang="ts">
  import { Croissant } from '$svg';
  import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

  const modalStore = getModalStore();
  const modal: ModalSettings = {
    type: 'component',
    component: 'LoginModal'
  };
  let holdTimeOut: NodeJS.Timeout;

  function handleHold() {
    holdTimeOut = setTimeout(() => {
      modalStore.trigger(modal);
    }, 3000);
  }

  function handleRelease() {
    clearTimeout(holdTimeOut);
  }
</script>

<button on:mousedown={handleHold} on:mouseup={handleRelease}>
  <Croissant class="text-primary-500" height="2rem" />
</button>

<style lang="postcss">
  button {
    @apply flex aspect-square w-full items-center justify-center;
    &:active {
      @apply animate-spin duration-200;
    }
  }
</style>
