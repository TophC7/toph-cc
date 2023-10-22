<script lang="ts">
	import { copy } from '$lib/tools';
	import Icon from '@iconify/svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { slide } from 'svelte/transition';
	import Tooltip from './Tooltip.svelte';

	const toastStore = getToastStore();
	const email = 'chris@toph.cc';

	let contactOpen = false;
	function handleClick() {
		contactOpen = !contactOpen;
	}

	function handleCopyError() {
		toastStore.trigger({
			message: "Couldn't copy email to clipboard ☹️",
			background: 'variant-filled-error',
			hideDismiss: true,
			timeout: 3000
		});
	}

	function handleCopySuccess() {
		toastStore.trigger({
			message: 'Email copied to clipboard!',
			background: 'variant-filled-success',
			hideDismiss: true,
			timeout: 3000
		});
	}
</script>

<div class="flex h-full flex-row">
	{#if contactOpen}
		<div class="iconWrapper br-r-unset" transition:slide={{ axis: 'x' }}>
			<Tooltip text="Github" position="bottom">
				<a href="https://github.com/tophc7">
					<Icon icon="mingcute:github-fill" />
				</a>
			</Tooltip>
			<Tooltip text="LinkedIn" position="bottom">
				<a href="https://www.linkedin.com/in/tophc7/">
					<Icon icon="mingcute:linkedin-fill" class="contactIcon" />
				</a>
			</Tooltip>
			<Tooltip text="Email" position="bottom">
				<button
					class="flex"
					use:copy={email}
					on:copySuccess={handleCopySuccess}
					on:copyError={handleCopyError}
				>
					<Icon icon="mingcute:mail-fill" class="contactIcon" />
				</button>
			</Tooltip>
			<Tooltip text="Resume" position="bottom">
				<a href="/docs/Resume.pdf">
					<Icon icon="mingcute:file-info-fill" class="contactIcon" />
				</a>
			</Tooltip>
		</div>
	{/if}
	<button class="contactBtn" class:br-l-unset={contactOpen} on:click={handleClick}>Contact</button>
</div>

<style>
	:global(.contactIcon) {
		@apply cursor-pointer text-primary-50;
	}

	.contactBtn {
		@apply variant-soft-primary btn inline-flex items-center justify-center gap-3 whitespace-nowrap px-5 py-2 text-center text-base transition-all;
		border-radius: var(--theme-rounded-base);
	}

	.iconWrapper {
		@apply flex flex-row items-center gap-2 bg-primary-400 bg-opacity-30 px-3;
	}

	/* Border Radius Right */
	.br-r-unset {
		border-radius: var(--theme-rounded-base) 0 0 var(--theme-rounded-base);
	}

	/* Border Radius Left */
	.br-l-unset {
		border-radius: 0 var(--theme-rounded-base) var(--theme-rounded-base) 0;
	}
</style>
