<script>
	import Card from '../lib/card.svelte';
</script>

<main class="flex flex-col gap-10">
	<div class=" max-w-4xl">
		<h1 class="glow pb-5 text-5xl font-bold leading-snug text-coral-500">
			Welcome to my portfolio!<br />
			I'm Chris, a young Software Engineer and Web Developer
		</h1>
		<p class="">
			I enjoy working with new technlogies and love learning new things. At the moment, I'm working hard to become a fully fledged full-stack Engineer with
			<span class="font-medium text-Mint-500">Spring</span> and <span class="font-medium text-Sea-500">React.js</span> as my core technlogies but I work with other techs all the time.
			You're invited to browse my site and take a look at who I am and all my projects!
		</p>
	</div>

	<Card />
	<div class="flex gap-5">
		<Card sideAccent="#e2ff92" title="My Name is Jeff" text="Chris Toph" image="../../static/images/toph-cc.png" link="#" className="w-1/2" />
		<Card sideAccent="#01c873" title="Another Tittle" text="This is Some text" image="../../static/images/toph-cc.png" link="#" className="w-1/2" />
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
