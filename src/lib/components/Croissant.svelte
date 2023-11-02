<script lang="ts">
  import Croissant from '$svg/crosissant.svg?component';
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

<button class="spin" on:mousedown={handleHold} on:mouseup={handleRelease}>
  <Croissant class="h-6 w-6 text-primary-500" />
</button>

<style lang="postcss">
  .spin {
    &:active {
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
