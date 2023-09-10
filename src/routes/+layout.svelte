<script>
	import Header from './Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import './styles.css';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<main class="mx-auto flex max-w-7xl flex-col px-8 xl:p-0 ease-linear transition-all">
		<slot />
	</main>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>

<style>
</style>
