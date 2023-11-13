<script lang="ts">
  import { BottomNav, LoginModal, SideNav, Tooltip } from '$components';
  import { MOBILE_WIDTH } from '$lib';
  import { Modal, Toast, initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
  import '../app.postcss';

  let innerWidth: number;
  $: mobile = innerWidth < MOBILE_WIDTH;

  // SKELETON: Stores and singleton initialization
  initializeStores();
  // Register custom modals here
  const modalRegistry: Record<string, ModalComponent> = {
    // Set a unique modal ID, then pass the component reference
    LoginModal: { ref: LoginModal }
  };
</script>

<svelte:window bind:innerWidth />

<!-- INFO: Singletons -->
<Tooltip />
<!-- SKELETON: Singletons -->
<Modal components={modalRegistry} />
<Toast padding="p-3" />

<!-- TODO: need to find a way to not load bar until were sure of width -->
<div id="AppWrapper" class="flex h-screen w-screen flex-row justify-center gap-4 overflow-auto p-4">
  {#if !mobile && innerWidth !== undefined}
    <SideNav />
  {/if}
  <main class="z-0 h-full w-full max-w-7xl">
    <slot />
    {#if mobile}
      <span class="spacer" />
    {/if}
  </main>
  {#if mobile}
    <BottomNav />
  {/if}
</div>

<style lang="postcss">
  /* Hide scrollbar for when small screen. Ui entices to scroll should not be needed hopefully 😐*/
  @screen -lg {
    #AppWrapper {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    }
  }

  .spacer {
    @apply block h-16 w-full;
  }
</style>
