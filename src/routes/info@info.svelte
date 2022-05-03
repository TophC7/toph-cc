<script>
	import PDF from '../../static/filePDF.svelte';
	import LinkedIn from '../../static/linkedIn.svelte';
	import Email from '../../static/envelope.svelte';
	import Github from '../../static/github.svelte';

	const complementary = '#53D7DF';
	// ^^ color for icons
</script>

<div class=" flex flex-col font-Inter font-semibold landscape:text-[4vmin] landscape:leading-[4vmin] portrait:text-[6vmin] portrait:leading-[6vmin] leading-none text-accent gap-14">
	<!-- WHO: Linked In -->
	<a class=" flex gap-5" href="https://www.linkedin.com/in/tophc7/">
		<i class=" icon ">
			<LinkedIn color={complementary} />
		</i>
		LinkedIn
	</a>

	<!-- WHO: GitHub -->
	<a class=" flex gap-5" href="https://github.com/TophC7">
		<i class=" icon ">
			<Github color={complementary} />
		</i>
		GitHub
	</a>

	<!-- WHO: Resume -->
	<a class=" flex gap-5" href="https://media-exp1.licdn.com/dms/document/C4E2DAQFy1KLhmyCL2g/profile-treasury-document-pdf-analyzed/0/1651465336842?e=2147483647&v=beta&t=U-8ZyADrsffwZ2vgopgVh3d2WUwe8VPCIORHjEPh74k">
		<i class=" icon ">
			<PDF color={complementary} />
		</i>
		Resume
	</a>

	<!-- WHO: Email -->
	<a class=" flex gap-5" href="mailto:chris@toph.cc">
		<i class=" icon ">
			<Email color={complementary} />
		</i>
		chris@toph.cc
	</a>
</div>

<style>
</style>
