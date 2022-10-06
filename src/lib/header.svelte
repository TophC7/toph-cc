<script>
	import Croissant from '$lib/SVGs/croissant.svelte';
	import { faAddressCard, faCopy, faEnvelope, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { accent } from '$lib/stores';
	import Fa from 'svelte-fa';

	let dropdownHidden = true;
	function toggleDropdown() {
		dropdownHidden = !dropdownHidden;
		document.getElementById('contact-icons').classList.toggle('w-0');
		if (!dropdownHidden) {
			//INFO: SHOWING
			document.getElementById('contact-btn').classList.add('bg-coral-100');
			document.getElementById('contact-btn').classList.add('text-Blueblack-900');
			document.getElementById('contact-icons').classList.add('bg-coral-100');
			document.getElementById('contact-icons').classList.add('w-[168px]');
			document.getElementById('contact-icons').classList.add('p-3');
			document.getElementById('contact-icons').classList.add('px-4');
		} else {
			//INFO: HIDDING
			document.getElementById('contact-btn').classList.remove('bg-coral-100');
			document.getElementById('contact-btn').classList.remove('text-Blueblack-900');
			document.getElementById('contact-icons').classList.remove('bg-coral-100');
			document.getElementById('contact-icons').classList.remove('w-[168px]');
			document.getElementById('contact-icons').classList.remove('p-3');
			document.getElementById('contact-icons').classList.remove('px-4');
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
			<div class="flex h-full flex-row-reverse">
				<button id="contact-btn" class="button-cntc z-50 rounded-l-none" on:mousedown={toggleDropdown}>
					Contact
				</button>
				<div
					id="contact-icons"
					class=" h-[44px] w-0 origin-center rounded-lg rounded-r-none bg-opacity-[85%] leading-none text-Blueblack-900 transition-all ease-linear"
				>
					<div class="flex h-full w-full min-w-max items-center gap-3 ">
						<a href="https://github.com/TophC7"><Fa icon={faGithubAlt} scale={1.1} fw /></a>
						<a href="https://www.linkedin.com/in/tophc7/"><Fa icon={faLinkedin} fw /></a>
						<button
							class="relative"
							on:click={() => {
								navigator.clipboard.writeText('chris@toph.cc');
								document.getElementById('email-toast').classList.toggle('opacity-0');
								setTimeout(() => {
									document.getElementById('email-toast').classList.toggle('opacity-0');
								}, 3000);
							}}
						>
							<div
								id="email-toast"
								class="absolute bottom-[200%] left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200"
							>
								<p
									class="flex items-center gap-2 whitespace-nowrap rounded-lg bg-offWhite p-1 px-2 text-xs font-semibold leading-none text-Blueblack-900"
								>
									<Fa icon={faInfoCircle} /> Copied Email
								</p>
							</div>
							<Fa icon={faEnvelope} fw />
						</button>
						<a href="/resume.pdf"><Fa icon={faAddressCard} fw /></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
