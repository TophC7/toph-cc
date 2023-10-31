<script lang="ts">
  import { AppShell, Toast, initializeStores } from '@skeletonlabs/skeleton';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import '../app.postcss';

  initializeStores();
</script>

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
