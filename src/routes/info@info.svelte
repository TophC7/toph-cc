<script>
	import PDF from '../../static/filePDF.svelte';
	import LinkedIn from '../../static/linkedIn.svelte';
	import Email from '../../static/envelope.svelte';
	import Github from '../../static/github.svelte';

	const complementary = '#53D7DF';
</script>

<div class=" flex flex-col font-Inter font-semibold landscape:text-[4vmin] landscape:leading-[4vmin] portrait:text-[6vmin] portrait:leading-[6vmin] leading-none text-accent gap-14">
	<a class=" flex gap-5" href="https://www.linkedin.com/in/tophc7/">
		<i class=" landscape:w-[4vmin] landscape:h-[4vmin] portrait:w-[6vmin] portrait:h-[6vmin]">
			<LinkedIn color={complementary} />
		</i>
		LinkedIn
	</a>

	<a class=" flex gap-5" href="https://github.com/TophC7">
		<i class=" landscape:w-[4vmin] landscape:h-[4vmin] portrait:w-[6vmin] portrait:h-[6vmin]">
			<Github color={complementary} />
		</i>
		GitHub
	</a>

	<a class=" flex gap-5" href="https://media-exp1.licdn.com/dms/document/C4E2DAQFy1KLhmyCL2g/profile-treasury-document-pdf-analyzed/0/1651465336842?e=2147483647&v=beta&t=U-8ZyADrsffwZ2vgopgVh3d2WUwe8VPCIORHjEPh74k">
		<i class="flex landscape:w-[4vmin] landscape:h-[4vmin] portrait:w-[6vmin] portrait:h-[6vmin] justify-center">
			<PDF color={complementary} />
		</i>
		Resume
	</a>

	<a class=" flex gap-5" href="mailto:chris@toph.cc">
		<i class=" landscape:w-[4vmin] landscape:h-[4vmin] portrait:w-[6vmin] portrait:h-[6vmin]">
			<Email color={complementary} />
		</i>
		chris@toph.cc
	</a>
</div>

<style>
</style>
