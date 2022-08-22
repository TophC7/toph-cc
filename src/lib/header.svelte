<script>
	import Croissant from '@SVGs/croissant.svelte';
	import { accent } from '@lib/stores';
</script>

<header>
	<div class="header-footer">
		<i class="mr-5 h-7 place-content-center">
			<Croissant color={accent} />
		</i>
		Chris Toph
		<div class=" ml-auto flex place-items-center gap-5">
			<a href="/">Github</a>
			<a class="button" href="/"> Contact </a>
		</div>
	</div>
</header>
