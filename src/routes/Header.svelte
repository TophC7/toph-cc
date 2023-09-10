<script>
	import Croissant from './../lib/images/croissant.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar class="w-full" regionRowMain="mx-auto flex xl:max-w-7xl w-full">
	<svelte:fragment slot="lead">
		<i class="h-6 w-6 text-primary-500"><Croissant color="currentColor" /></i>
	</svelte:fragment>
	<h1 class="text-xl">Chris Toph</h1>
	<svelte:fragment slot="trail">
		<button type="button" class="btn variant-soft-primary">Contact</button>
	</svelte:fragment>
</AppBar>

<style>
</style>
