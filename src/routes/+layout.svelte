<script lang="ts">
  import { AppShell, Modal, Toast, initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import '../app.postcss';
  import { LoginModal } from '$components';

  initializeStores();

  // Register custom modals here
  const modalRegistry: Record<string, ModalComponent> = {
    // Set a unique modal ID, then pass the component reference
    LoginModal: { ref: LoginModal }
  };
</script>

<Modal components={modalRegistry} />
<Toast padding="p-3" />

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <!-- (sidebarLeft) -->
  <!-- (sidebarRight) -->
  <!-- (pageHeader) -->
  <!-- Router Slot -->
  <main class="mx-auto flex max-w-7xl flex-col px-8 transition-all ease-linear xl:p-0">
    <slot />
  </main>
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
  <!-- (footer) -->
</AppShell>
