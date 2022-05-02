<script>
	import UOFR from '../lib/ascii/ufor.svelte';
	import UPR from '../lib/ascii/upr.svelte';
	import { page } from '../lib/stores';

	page.set('Edu');
</script>

<div class="flex flex-col gap-14">
	<section class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div>
			<div class=" flex gap-4 justify-between align-bottom">
				<span id="inside" class=" pb-4"> <UPR /> </span>
				<div class=" flex flex-col justify-between">
					University of Puerto Rico, Mayagüez <br />
					<div>- - - - - - - - - - - - - - - - -</div>
				</div>
			</div>
			<!-- !!! &nbsp; adds a space since vscode keeps deleting it -->
			Date:&nbsp;<span class=" font-normal text-offWhite">August 2017 - December 2021</span> <br />
			Bachelor in: <span class=" font-normal text-offWhite">Computer Science and Engineering</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite">Computer programming in Python, Advance programming in Java, Discrete Mathematics</span> <br />
			GPA: <span class=" font-normal text-offWhite">3.45 wtih 88 completed credits</span> <br />
		</div>
		<span id="outside"> <UPR /> </span>
	</section>
	<section class=" lg:flex font-Inter font-semibold text-[4vmin] lg:text-[2.5vmin] text-accent">
		<div>
			<div class=" flex gap-4 justify-between align-bottom">
				<span id="inside" class=" pb-4"> <UOFR /> </span>
				<div class=" flex flex-col justify-between">
					University of Regina, Saskatchewan <br />
					<div>- - - - - - - - - - - - - - - - -</div>
				</div>
			</div>
			Exchange Year:&nbsp;<span class=" font-normal text-offWhite"> August 2018 - May 2019</span> <br />
			Studies in: <span class=" font-normal text-offWhite"> Computer Science and Sociohumanistics</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite"> Advance programming in C++, Algorithms</span> <br />
		</div>
		<span id="outside"> <UOFR /> </span>
	</section>
</div>

<style>
	#outside {
		display: none;
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
