<script>
	import { page } from '$lib/stores';

	page.set('Edu');
</script>

<div class="flex flex-col gap-10">
	<!-- WHO: UPRM section -->
	<section name="UPRM" class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2vmin] text-accent">
		<div>
			<!-- ^^ wrapping div to keep content togheter otherwise desktop logo and text wont flex correctly -->
			<div class=" flex gap-4 pb-4">
				<img id="mobile" src="svg/upr.svg" class="h-[10vmin] my-auto" alt="univesity of puerto rico logo" />
				<!-- ^^ logo for mobile-->
				<p class=" flex flex-col justify-between text-[5vmin] lg:text-[4vmin]">University of Puerto Rico, Mayagüez</p>
			</div>
			<!-- !!! &nbsp; adds a space since vscode keeps deleting it -->
			Date:&nbsp;<span class=" font-normal text-offWhite">August 2017 - December 2021</span> <br />
			Bachelor in: <span class=" font-normal text-offWhite">Computer Science and Engineering</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite">Computer programming in Python, Advance programming in Java, Discrete Mathematics</span> <br />
			GPA: <span class=" font-normal text-offWhite">3.45 with 88 completed credits</span> <br />
		</div>
		<img id="desktop" src="svg/upr.svg" class="w-[20vmin]" alt="univesity of puerto rico logo" />
		<!-- ^^ logo for desktop -->
	</section>

	<!-- WHO: UOFR section -->
	<section name="UFOR" class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2vmin]  text-accent">
		<div>
			<div class=" flex gap-4 pb-4">
				<img id="mobile" src="svg/uofr.svg" class="h-[10vmin] my-auto" alt="univesity of regina logo" />
				<p class=" flex flex-col justify-between text-[5vmin] lg:text-[4vmin]">University of Regina, Saskatchewan</p>
			</div>
			Exchange Year:&nbsp;<span class=" font-normal text-offWhite"> August 2018 - May 2019</span> <br />
			Studies in: <span class=" font-normal text-offWhite"> Computer Science and Sociohumanistics</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite"> Advance programming in C++, Algorithms</span> <br />
		</div>
		<img id="desktop" src="svg/uofr.svg" class="w-[20vmin]" alt="univesity of regina logo" />
	</section>

	<section name="certifications" class=" font-Inter font-semibold text-[4vmin] lg:text-[2vmin] text-accent">
		<p class="text-[5vmin] lg:text-[4vmin] pb-4">Certifications in progress</p>

		Google IT Support Certification:&nbsp;<span class=" font-normal text-offWhite"> Expected date of completion June 2022</span> <br />
		CompTIA A+ Certification: <span class=" font-normal text-offWhite"> Expected date of completion July 2022</span> <br />
	</section>
</div>

<style>
	/* INFO: This hides or shows the correct uni logo depending in the screen */
	/* WHY: tailwind once again is horrible dealing with @media*/
	#desktop {
		display: none;
		margin-left: auto;
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
