<script lang="ts">
	import { Palette } from '$lib/Pallete';
	import { uniqueId } from '$lib/tools';
	import ColorThief from 'colorthief';
	import { onMount } from 'svelte';
	import tinycolor from 'tinycolor2';

	export let tittle = 'Tittle'; // Project Tittle
	export let description = 'Description'; // Project Description Text
	export let imageSource = '/images/toph-cc.png'; // Project Image Source
	export let action: { url: string; text: string }; // Project Action Button, Optional

	const imageId = uniqueId();

	let color = tinycolor();
	$: articleStyleVars = (() => {
		const palette = new Palette(color);
		const primary = palette.primary.setAlpha(0.8).toRgbString();
		const secondary = palette.secondary.setAlpha(0.8).toRgbString();
		const tertiary = palette.tertiary.setAlpha(0.8).toRgbString();
		const onPrimary = palette.onPrimary.toRgbString();
		const onSecondary = palette.onSecondary.toRgbString();
		const onTertiary = palette.onTertiary.toRgbString();
		return `--palette-primary: ${primary}; --palette-secondary: ${secondary}; --palette-tertiary: ${tertiary}; --palette-on-primary: ${onPrimary}; --palette-on-secondary: ${onSecondary}; --palette-on-tertiary: ${onTertiary}`;
	})();

	onMount(() => {
		const img = document.getElementById(imageId) as HTMLImageElement;
		const thievedColor = new ColorThief().getColor(img, 1);
		color = tinycolor({ r: thievedColor[0], g: thievedColor[1], b: thievedColor[2] });
	});
</script>

<article class="card" style={articleStyleVars}>
	<div class="card-header">
		{tittle}
	</div>
	<div class="p-4">
		{description}
	</div>
	<img
		id={imageId}
		src={imageSource}
		alt="Screenshot of Nerf This featuring a background of Morgana from League of Legends"
	/>
	{#if action && action.url && action.text}
		<a class="btn" href={action.url}> {action.text} </a>
	{/if}
</article>

<style>
	article.card {
		background-color: var(--palette-primary);
		color: var(--palette-on-primary);
	}
</style>
