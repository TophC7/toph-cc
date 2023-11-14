<script lang="ts">
  import { Contact, Croissant, EditButton } from '$components/Layout';
  import { AppBar } from '@skeletonlabs/skeleton';
  import TrailMobile from './TrailMobile.svelte';

  let mobile: boolean;
  let clientWidth: number;
  $: mobile = clientWidth < 640;
</script>

<div bind:clientWidth>
  <AppBar
    class="w-full !p-0"
    regionRowMain="mx-auto flex xl:max-w-7xl w-full p-4"
    regionRowHeadline="!my-[unset] variant-soft">
    <svelte:fragment slot="lead">
      <Croissant />
    </svelte:fragment>
    <h1 class="text-xl">Chris Toph</h1>
    <svelte:fragment slot="trail">
      {#if mobile}
        <TrailMobile />
      {:else}
        <EditButton />
        <Contact />
      {/if}
    </svelte:fragment>
  </AppBar>
</div>
