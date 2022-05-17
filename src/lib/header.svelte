<script>
	import { page } from '$lib/stores';

	let pageValue;
	// ^^ page name

	// INFO: gets store of page and records it for use on header
	page.subscribe((value) => {
		pageValue = value;
	});
</script>

<!-- INFO: On desktop space on name and chevron is removed and in mobile name and Page are separated  -->
<div class=" flex flex-col lg:flex-row font-Inter text-offWhite font-semibold ">
	<div class=" lg:text-[7.4vmin] text-[10vmin]">
		Chris<span class=" lg:hidden">{' '}</span>Toph
		<span class="text-complementary lg:hidden">{'›'}</span>
	</div>

	<div class=" text-[7.4vmin]">
		<span class=" text-accent">@</span>{pageValue}:
		<span class=" text-accent">~</span> <span class=" animate-pulse text-complementary">_</span>
	</div>
</div>
