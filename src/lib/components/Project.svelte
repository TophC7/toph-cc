<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Palette, type PaletteTuple } from '$lib/Palette';
	import { link, uniqueId } from '$lib/tools';
	import ColorThief from 'colorthief';
	import { onMount } from 'svelte';

	type ProjectAction = { url: string; text: string; disabled?: boolean };

	export let tittle = 'Tittle'; // Project Tittle
	export let description = 'Description'; // Project Description Text
	export let imageSource = '/images/toph-cc.png'; // Project Image Source
	export let actions: ProjectAction[]; // Project Action Button, Optional

	const imageId = uniqueId();

	let currentWidth: number;
	let landscape: boolean;
	const setLandscape = () => {
		landscape = currentWidth >= 1280;
	};
	$: currentWidth && setLandscape();

	let palette: Palette;
	function createPalette(imageSource: string) {
		const img = new Image();
		img.src = imageSource;
		img.crossOrigin = 'Anonymous';
		img.style.display = 'none';
		document.body.appendChild(img);
		img.onload = () => {
			const colors = new ColorThief().getPalette(img, 3, 5) as PaletteTuple;
			document.body.removeChild(img);
			palette = new Palette(colors);
		};
	}

	function getPaletteVars(palette: Palette) {
		const { primary, secondary, tertiary, onPrimary, onSecondary, onTertiary } = palette;
		return `--palette-primary: ${primary}; --palette-secondary: ${secondary}; --palette-tertiary: ${tertiary}; --palette-on-primary: ${onPrimary}; --palette-on-secondary: ${onSecondary}; --palette-on-tertiary: ${onTertiary}`;
	}

	function getArticleVars(): Promise<string> {
		return new Promise((res) =>
			setTimeout(() => {
				const vars = getPaletteVars(palette.soft(true));
				res(vars);
			}, 200)
		);
	}

	onMount(() => {
		createPalette(imageSource);
	});
</script>

<!-- TODO: Add ability for multiple images -->

{#await getArticleVars() then vars}
	<article
		class="card variant-soft"
		class:landscape
		style={vars}
		bind:clientWidth={currentWidth}
		transition:fly={{ y: -50 }}
	>
		{#if landscape}
			<div class="card-image">
				<img
					class="h-full w-full object-cover"
					id={imageId}
					src={imageSource}
					alt="screenshot of the project"
				/>
			</div>
			<div class="card-content">
				<h2 class="card-tittle">
					{tittle}
				</h2>
				<div class="card-description">
					{description}
				</div>
				{#if actions}
					<div class="card-actions">
						{#each actions as action}
							<button class="variant-soft btn" disabled={action.disabled} use:link={action.url}>
								{action.text}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		{:else}
			<h2 class="card-tittle">
				{tittle}
			</h2>
			<div class="card-description">
				{description}
			</div>
			<div class="card-image">
				<img
					class="h-full w-full object-cover"
					id={imageId}
					src={imageSource}
					alt="screenshot of the project"
				/>
			</div>
			{#if actions}
				<div class="card-actions">
					{#each actions as action}
						<button class="variant-soft btn" disabled={action.disabled} use:link={action.url}>
							{action.text}
						</button>
					{/each}
				</div>
			{/if}
		{/if}
	</article>
{/await}

<style lang="postcss">
	article.card {
		@apply flex flex-col gap-4 p-4;
		background-color: var(--palette-primary);
		color: var(--palette-on-primary);
	}

	article.landscape {
		@apply grid gap-4;
		grid-template-columns: 1fr 30%;
		& .card-tittle {
			@apply text-4xl;
		}
		& .card-description {
			@apply text-xl;
		}
	}

	.card-content {
		@apply flex flex-col gap-2;
		grid-area: 'content';
	}

	.card-tittle {
		@apply text-3xl font-bold;
	}

	.card-description {
		@apply h-full text-base;
	}

	.card-image {
		@apply max-h-min max-w-full;
		& > img {
			border-radius: var(--theme-rounded-base);
		}
	}

	.card-actions {
		@apply flex w-full items-center justify-end gap-4;
	}

	.btn {
		background-color: var(--palette-tertiary);
		color: var(--palette-on-tertiary);

		&:last-child,
		&:only-child {
			background-color: var(--palette-secondary);
			color: var(--palette-on-secondary);
		}
	}
</style>
