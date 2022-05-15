<script>
	import { page } from '$lib/stores';

	page.set('Exp');
</script>

<div class="flex flex-col gap-14">
	<!-- WHO: Casas Mi Eden section -->
	<section name="CME" class="font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div class="flex gap-4">
			<div id="desktop" class=" h-[10vmin]"><img src="svg/puter.svg" class="h-full" alt="old pc icon" /></div>
			<!-- ^^ icon for desktop -->
			<span id="mobile" class=" flex justify-center place-items-center"> <img src="svg/puter.svg" class="w-[15vmin]" alt="old pc icon" /> </span>
			<!-- ^^ icon for mobile-->
			<div class=" flex flex-col justify-between">
				IT Technician & Clerk
				<div>
					<!-- ^^ wrapping div -->
					<span class=" text-complementary">@</span> Casas Mi Eden<br />
					<div>- - - - - - - - - - - - - - - - -</div>
				</div>
			</div>
		</div>
		<!-- !!! &nbsp; adds a space since vscode keeps deleting it -->
		Date:&nbsp;<span class=" font-normal text-offWhite">August 2019 - May 2021</span> <br />
		Summary:
		<span class=" font-normal text-offWhite">
			With limited resources built new workstations (PCs) for 15 employees providing them with a better workflow. Was often in charge of maintenance of store-wide server utilities and connected devices. Received all costumers with warm greeting and
			provided any assistance they required. Created promotional emails, flyers, etc. for use in the company's sales and events.
		</span>
	</section>

	<!-- WHO: UAV Team section -->
	<section name="UAV" class="font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div class=" flex gap-4">
			<div id="desktop" class=" h-[10vmin]"><img src="svg/drone.svg" class="h-full" alt="drone icon" /></div>
			<!-- ^^ icon for desktop -->
			<span id="mobile" class=" flex justify-center place-items-center"> <img src="svg/drone.svg" class="w-[15vmin]" alt="drone icon" /> </span>
			<!-- ^^ ascii logo for mobile-->
			<div class=" flex flex-col justify-between">
				General Technician
				<div>
					<!-- ^^ wrapping div -->
					<span class=" text-complementary">@</span> UAV Search And Rescue, UPRM<br />
					<div>- - - - - - - - - - - - - - - - -</div>
				</div>
			</div>
		</div>
		<!-- !!! &nbsp; adds a space since vscode keeps deleting it -->
		Date:&nbsp;<span class=" font-normal text-offWhite">December 2019 - May 2020</span> <br />
		Summary:
		<span class=" font-normal text-offWhite">
			Charged with programming an autonomous rescue Drone. Worked with teams in different research areas to attain the best possible solutions to achieve our goals with the Drone. Positioned as General Technician due to my ability to work efficiently
			with all the teams and learn from their areas of research.
		</span>
	</section>
</div>

<style>
	/* INFO: This hides or shows the correct ascii art depending in the screen */
	/* WHY: tailwind once again is horrible dealing with @media*/
	#desktop {
		display: none;
	}
	@media only screen and (min-width: 1024px) {
		#mobile {
			display: none;
		}

		#desktop {
			display: block;
		}
	}
</style>
