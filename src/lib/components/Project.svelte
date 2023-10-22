<script lang="ts">
	export let tittle = 'Tittle'; // Project Tittle
	export let description = 'Description'; // Project Description Text
	// export let imageSource = '/'; // Project Image Source
	export let action: { url: string; text: string }; // Project Action Button, Optional
	export let cardVariant = 'variant-filled-primary'; // Project Card Variant Style, use Tailwind/Skeleton Class
</script>

<article class={`card ${cardVariant}`}>
	<div class="card-header">
		{tittle}
	</div>
	<div class="p-4">
		{description}
	</div>
	{#if action && action.url && action.text}
		<a class="btn" href={action.url}> {action.text} </a>
	{/if}
</article>

<style>
</style>
``