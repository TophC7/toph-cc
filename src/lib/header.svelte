<script>
	import { page } from '../lib/stores';

	let pageValue;

	page.subscribe((value) => {
		pageValue = value;
	});
</script>

<p class=" font-Inter text-offWhite font-semibold text-7xl my-14">
	ChrisToph<span class=" text-accent">@</span>{pageValue}:
	<span class=" text-accent">~</span> <span class=" animate-pulse text-complementary">_</span>
</p>
