<script>
	import Project from '$lib/project.svelte';
	import { projects } from '$lib/stores.js';
	import { nt } from '$lib/stores.js';
</script>

<main class="flex flex-col gap-10">
	<div class=" max-w-4xl">
		<h1 class="glow pb-5 text-5xl font-bold leading-snug text-coral-500">
			Welcome to my portfolio!<br />
			I'm Chris, a young Software Engineer and Web Developer
		</h1>
		<p class="">
			I enjoy working with new technlogies and love learning new things. At the moment, I'm working hard to become a
			fully fledged full-stack Engineer with
			<span class="font-medium text-Mint-500">Spring</span> and <span class="font-medium text-Sea-500">React.js</span> as
			my core technlogies but I work with other techs all the time. You're invited to browse my site and take a look at who
			I am and all my projects!
		</p>
	</div>

	<Project project={nt} />
	<div class="flex gap-5">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</main>

<style>
	.glow {
		--accent: rgba(223, 91, 83, 0.5);
		text-shadow: 0 0 0.8rem var(--accent);
		animation: blink linear infinite 5s;
	}

	@keyframes blink {
		50% {
			text-shadow: inherit;
		}
		60% {
			text-shadow: white;
		}
	}
</style>
