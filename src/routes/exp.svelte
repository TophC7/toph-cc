<script>
	import { page } from '$lib/stores';

	page.set('Exp');
</script>

<div class="flex flex-col gap-14">
	<!-- WHO: Casas Mi Eden section -->
	<section name="CME" class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div>
			<!-- ^^ wrapping div -->
			<div class=" flex gap-4">
				<span id="inside" class=" flex justify-center place-items-center"> <img src="static/svg/puter.svg" class="w-[20vmin]" alt="old pc icon" /> </span>
				<!-- ^^ ascii logo for mobile-->
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
		</div>
		<div id="outside" class="w-full max-w-max"><img src="static/svg/puter.svg" class="w-[10vmin]" alt="old pc icon" /></div>
		<!-- ^^ ascii logo for desktop -->
	</section>

	<!-- WHO: UAV Team section -->
	<section name="UAV" class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div>
			<!-- ^^ wrapping div -->
			<div class=" flex gap-4">
				<span id="inside" class=" flex justify-center place-items-center"> <img src="static/svg/drone.svg" class="w-[20vmin]" alt="drone icon" /> </span>
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
				Charged with programming an autonomous rescue Drone. Worked with teams in different research areas to attain the best possible solutions to achieve our goals with the Drone. Positioned as General Technician due to my ability to work
				efficiently with all the teams and learn from their areas of research.
			</span>
		</div>
		<div id="outside" class="w-full max-w-max"><img src="static/svg/drone.svg" class="w-[10vmin]" alt="drone icon" /></div>
		<!-- ^^ ascii logo for desktop -->
	</section>
</div>

<style>
	/* INFO: This hides or shows the correct ascii art depending in the screen */
	/* WHY: tailwind once again is horrible dealing with @media*/
	#outside {
		display: none;
		margin-left: auto;
	}
	@media only screen and (min-width: 1024px) {
		#inside {
			display: none;
		}

		#outside {
			display: block;
		}
	}
</style>
