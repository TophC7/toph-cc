<script lang="ts">
	import { EMPTY_PALETTE, Palette, type PaletteTuple } from '$lib/Palette';
	import { uniqueId } from '$lib/tools';
	import ColorThief from 'colorthief';
	import { onMount } from 'svelte';

	export let tittle = 'Tittle'; // Project Tittle
	export let description = 'Description'; // Project Description Text
	export let imageSource = '/images/toph-cc.png'; // Project Image Source
	export let action: { url: string; text: string }; // Project Action Button, Optional

	const imageId = uniqueId();

	let colors: PaletteTuple = EMPTY_PALETTE;
	$: articleStyleVars = (() => {
		const { primary, secondary, tertiary, onPrimary, onSecondary, onTertiary } = new Palette(
			colors
		).soft(true);
		return `--palette-primary: ${primary}; --palette-secondary: ${secondary}; --palette-tertiary: ${tertiary}; --palette-on-primary: ${onPrimary}; --palette-on-secondary: ${onSecondary}; --palette-on-tertiary: ${onTertiary}`;
	})();

	onMount(() => {
		const img = document.getElementById(imageId) as HTMLImageElement;
		colors = new ColorThief().getPalette(img, 3, 5) as PaletteTuple;
	});
</script>

<!-- TODO: Add ability for multiple images -->

<article class="card" style={articleStyleVars}>
	<h2 class="card-header">
		{tittle}
	</h2>

	<div class="cart-content">
		<div class="p-4">
			{description}
		</div>
		<img id={imageId} src={imageSource} alt="screenshot of the project" />
	</div>

	<div class="cart-actions"></div>
	{#if action && action.url && action.text}
		<a class="variant-soft btn" href={action.url}> {action.text} </a>
	{/if}
</article>

<style>
	article.card {
		background-color: var(--palette-primary);
		color: var(--palette-on-primary);
	}

	.btn {
		background-color: var(--palette-secondary);
		color: var(--palette-on-secondary);
	}
</style>
