<script>
	import { page } from '$lib/stores';

	page.set('Exp');
</script>

<div class="flex flex-col gap-10">
	<!-- WHO: Casas Mi Eden section -->
	<section name="CME" class="font-Inter font-semibold text-[4vmin] lg:text-[2vmin] text-accent">
		<div class="flex gap-4 pb-4">
			<img src="svg/puter.svg" class="h-[10vmin] my-auto" alt="old pc icon" />
			<div class=" flex flex-col justify-between text-[5vmin] lg:text-[4vmin]">
				IT Technician & Clerk
				<div>
					<!-- ^^ wrapping div -->
					<span class=" text-complementary">@</span> Casas Mi Eden
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
	<section name="UAV" class="font-Inter font-semibold text-[4vmin] lg:text-[2vmin] text-accent">
		<div class=" flex gap-4 pb-4">
			<img src="svg/drone.svg" class=" h-[10vmin] my-auto" alt="drone icon" />
			<div class=" flex flex-col justify-between text-[5vmin] lg:text-[4vmin]">
				General Technician
				<div>
					<!-- ^^ wrapping div -->
					<span class=" text-complementary">@</span> UAV Search & Rescue, UPRM
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
