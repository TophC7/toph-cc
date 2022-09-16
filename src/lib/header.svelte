<script>
	import Croissant from '$lib/SVGs/croissant.svelte';
	import { accent } from '$lib/stores';
</script>

<header>
	<div class="header-footer gap-5 whitespace-nowrap">
		<i class="h-7 min-w-max place-content-center">
			<Croissant color={accent} />
		</i>
		Chris Toph
		<div class=" ml-auto flex place-items-center gap-5">
			<a href="/">Github</a>
			<a class="button" href="/"> Contact </a>
		</div>
	</div>
</header>
