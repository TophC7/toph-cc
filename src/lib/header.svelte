<script>
	import Croissant from '$lib/SVGs/croissant.svelte';
	import { faAddressCard, faCaretDown, faEnvelope, faFile, faFilePdf } from '@fortawesome/free-solid-svg-icons';
	import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
	import { accent } from '$lib/stores';
	import Fa from 'svelte-fa';

	let dropdownHidden = true;
	function toggleDropdown() {
		dropdownHidden = !dropdownHidden;
		document.getElementById('contact-icons').classList.toggle('scale-x-0');
		if (!dropdownHidden) {
			document.getElementById('contact-btn').classList.add('bg-coral-100');
			document.getElementById('contact-btn').classList.add('text-Blueblack-900');
			document.getElementById('contact-icons').classList.add('bg-coral-100');
		} else {
			document.getElementById('contact-btn').classList.remove('bg-coral-100');
			document.getElementById('contact-btn').classList.remove('text-Blueblack-900');
			document.getElementById('contact-icons').classList.remove('bg-coral-100');
		}
	}
</script>

<header>
	<div class="header-footer gap-5 whitespace-nowrap">
		<i class="h-7 min-w-max place-content-center">
			<Croissant color={accent} />
		</i>
		Chris Toph
		<div class="relative ml-auto flex w-full place-items-center justify-end">
			<!-- <a href="/">Github</a> -->
			<div
				id="contact-icons"
				class="origin-right scale-x-0 rounded-lg rounded-r-none bg-opacity-[85%] p-3 px-4 leading-none text-Blueblack-900 transition-all ease-linear"
			>
				<div class="flex w-full min-w-max space-x-3">
					<a href="https://github.com/TophC7"><Fa icon={faGithubAlt} scale={1.1} fw /></a>
					<a href="mailto:chris@toph.cc"><Fa icon={faEnvelope} fw /></a>
					<a href="/resume.pdf"><Fa icon={faAddressCard} fw /></a>
				</div>
			</div>
			<button
				id="contact-btn"
				class="button rounded-l-none"
				href="/"
				on:focus={toggleDropdown}
				on:focusout={toggleDropdown}
			>
				Contact
			</button>
		</div>
	</div>
</header>

<style>
	/* #contact-icons {
		animation: slide-out 1s ease;
		transform-origin: right;
	}

	@keyframes slide-out {
		100% {
			transform: scaleX(1);
		}
	} */
</style>
