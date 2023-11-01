<script>
  import { Contact, Croissant } from '$lib/components';
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar class="w-full" regionRowMain="mx-auto flex xl:max-w-7xl w-full">
  <svelte:fragment slot="lead">
    <Croissant />
  </svelte:fragment>
  <h1 class="text-xl">Chris Toph</h1>
  <svelte:fragment slot="trail">
    <Contact />
  </svelte:fragment>
</AppBar>

<style>
</style>
