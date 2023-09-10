<script lang="ts">
	export let array: Array<string>;
</script>

<span class="text-tertiary-500">
	{#each array as str, i}
		{#if i === 0}
			<i class="bracket">{'['}</i>{`'${str}'`}<i class="comma">{', '}</i>
		{:else if i === array.length - 1}
			{`'${str}'`}<i class="bracket">{']'}</i>
		{:else}
			{`'${str}'`}<i class="comma">{', '}</i>
		{/if}
	{/each}
</span>

<style>
	.bracket {
		@apply not-italic text-warning-500;
	}
	.comma {
		@apply not-italic text-primary-50;
	}
</style>
