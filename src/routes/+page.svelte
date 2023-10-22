<script lang="ts">
	import ArrayFormat from '$lib/components/ArrayFormat.svelte';
	import Project from '$lib/components/Project.svelte';
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

<section class="pt-8 transition-all ease-linear xl:pt-14">
	<div>
		<h1
			class="glow max-w-4xl pb-5 text-4xl font-bold leading-snug text-primary-500 transition-all ease-linear xl:text-5xl"
		>
			Welcome to my portfolio!<br />
			I'm Chris, a Software Engineer and Web Developer
		</h1>
		<p class="max-w-5xl">
			At the moment, I am working as a developer for
			<a class="font-Alpino-medium text-warning-500 underline" href="https://nicheaim.com/"
				>NicheAim Technologies</a
			>
			with Full-Stack projects related to FHIR and Healthcare gaining valuable experience to become the
			<span class="font-Alpino-medium fable"> fabled 10x Dev</span>. My core languages are
			<span class="font-Alpino-medium text-error-500">Java</span> and
			<span class="font-Alpino-medium text-secondary-500">TypeScript</span> and some technologies I
			work with are <ArrayFormat array={techs} /> but I work with other techs all the time and love learning
			new ones. You're invited to browse around my site, learn more about me, and see my projects!
		</p>
	</div>
</section>

<Project
	tittle="Nerf This"
	description="Nerf This Project"
	imageSource="images/morgana-nt.png"
	action={{ url: '/', text: 'Git' }}
/>

<Project
	tittle="Toph.cc"
	description="Toph.cc Project"
	imageSource="/images/toph-cc.png"
	action={{ url: '/', text: 'Git' }}
/>

<style>
	.glow {
		text-shadow: 0 0 0.8rem rgba(var(--color-primary-700));
		animation: blink linear infinite 5s;
	}

	.fable {
		@apply box-decoration-clone bg-clip-text text-transparent;
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
