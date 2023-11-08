<script lang="ts">
  import { LoginModal, SideNav } from '$components';
  import BottomNav from '$components/Nav/BottomNav.svelte';
  import { Modal, Toast, initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
  import '../app.postcss';

  initializeStores();

  let innerWidth: number;
  $: mobile = innerWidth < 1280;

  // Register custom modals here
  const modalRegistry: Record<string, ModalComponent> = {
    // Set a unique modal ID, then pass the component reference
    LoginModal: { ref: LoginModal }
  };
</script>

<svelte:window bind:innerWidth />

<Modal components={modalRegistry} />
<Toast padding="p-3" />

<div class="flex h-screen w-screen flex-row justify-center gap-4 overflow-auto p-4">
  {#if !mobile}
    <SideNav />
  {/if}
  <main class="z-0 h-full w-full max-w-7xl">
    <slot />
    {#if mobile}
      <BottomNav />
    {/if}
  </main>
</div>
