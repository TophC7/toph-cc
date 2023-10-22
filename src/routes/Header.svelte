<script>
	import Contact from '$lib/components/Contact.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Croissant from '$lib/SVGs/croissant.svelte';
</script>

<AppBar class="w-full" regionRowMain="mx-auto flex xl:max-w-7xl w-full">
	<svelte:fragment slot="lead">
		<i class="h-6 w-6 text-primary-500"><Croissant color="currentColor" /></i>
	</svelte:fragment>
	<h1 class="text-xl">Chris Toph</h1>
	<svelte:fragment slot="trail">
		<Contact />
	</svelte:fragment>
</AppBar>

<style>
</style>
