<script lang="ts">
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let text: string = '';

	let tooltipVisible = false;

	function handleMouse() {
		tooltipVisible = !tooltipVisible;
	}
</script>

<div
	class="tooltip-container"
	role="tooltip"
	on:mouseenter={handleMouse}
	on:mouseleave={handleMouse}
>
	{#if tooltipVisible}
		<div class={`tooltip tooltip-${position}`}>{text}</div>
	{/if}

	<slot />
</div>

<style>
	.tooltip-container {
		position: relative;
		display: inline-block;
	}

	.tooltip {
		@apply absolute z-10 bg-primary-50 p-1 text-sm leading-none ring-inset ring-primary-500 text-on-primary-token;
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
		border-radius: var(--theme-rounded-container);
	}

	.tooltip-top {
		@apply bottom-[120%] left-1/2 translate-x-[-50%];
	}

	.tooltip-bottom {
		@apply left-1/2 top-[120%] translate-x-[-50%];
	}

	.tooltip-left {
		@apply right-[120%] top-1/2 translate-y-[-50%];
	}

	.tooltip-right {
		@apply left-[120%] top-1/2 translate-y-[-50%];
	}
</style>
