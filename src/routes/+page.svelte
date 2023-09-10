<script lang="ts">
	import ArrayFormat from '$lib/components/ArrayFormat.svelte';
	const techs = [
		'Fhir',
		'Keycloak',
		'Spring',
		'Next.js',
		'Svelte',
		'Tailwind',
		'Docker',
		'Google Cloud'
	];
</script>

<svelte:head>
	<title>Chris Toph</title>
	<meta name="description" content="My Portfolio" />
</svelte:head>

<section class="pt-8 xl:pt-14 ease-linear transition-all">
	<div>
		<h1
			class="glow pb-5 max-w-4xl text-4xl xl:text-5xl font-bold leading-snug text-primary-500 ease-linear transition-all"
		>
			Welcome to my portfolio!<br />
			I'm Chris, a young Software Engineer and Web Developer
		</h1>
		<p class="max-w-5xl">
			At the moment, I am working as a developer for
			<a class="underline text-warning-500" href="https://nicheaim.com/">NicheAim Technologies</a>
			with Full-Stack projects related to FHIR and Healthcare gaining valuable experience to become the
			<span class="font-medium fable"> fabled 10x Dev</span>. My core languages are
			<span class="font-medium text-error-500">Java</span> and
			<span class="font-medium text-secondary-500">TypeScript</span> and some technologies I work
			with are <ArrayFormat array={techs} /> but I work with other techs all the time and love learning
			new ones. You're invited to browse around my site, learn more about me, and see my projects!
		</p>
	</div>
</section>

<section class="pt-8 xl:pt-14 ease-linear transition-all">
	<div class="card variant-soft-secondary p-4">
		<span>basic</span>
	</div>
</section>

<style>
	.glow {
		text-shadow: 0 0 0.8rem rgba(var(--color-primary-700));
		animation: blink linear infinite 5s;
	}

	.fable {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-r;
		/* Color Stops */
		@apply from-warning-500 via-error-500 to-secondary-500;
		background-size: 400%;
		-webkit-animation: flowGradient 10s ease infinite;
		-moz-animation: flowGradient 10s ease infinite;
		animation: flowGradient 10s ease infinite;
	}

	@keyframes flowGradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
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
