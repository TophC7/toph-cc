<script>
	import UOFR from '../lib/ascii/ufor.svelte';
	import UPR from '../lib/ascii/upr.svelte';
	import { page } from '../lib/stores';

	page.set('Edu');
</script>

<div class="flex flex-col gap-14">
	<section class=" flex gap-14">
		<UPR />
		<p class=" font-Inter font-semibold text-[2.5vmin] text-accent">
			University of Puerto Rico, Mayagüez <br />
			- - - - - - - - - - - - <br />
			Date: <span class=" font-normal text-offWhite">August 2017 - December 2021</span> <br />
			Bachelor in: <span class=" font-normal text-offWhite">Computer Science and Engineering</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite">Computer programming in Python, Advance programming in Java, Discrete Mathematics</span> <br />
			GPA: <span class=" font-normal text-offWhite">3.45 wtih 88 completed credits</span> <br />
		</p>
	</section>
	<section class=" flex gap-14">
		<UOFR />
		<p class=" font-Inter font-semibold text-[2.5vmin] text-accent">
			University of Regina, Saskatchewan <br />
			- - - - - - - - - - - - <br />
			Exchange Year: <span class=" font-normal text-offWhite"> August 2018 - May 2019</span> <br />
			Studies in: <span class=" font-normal text-offWhite">Computer Science and Sociohumanistics</span> <br />
			Relevant courses: <span class=" font-normal text-offWhite">Advance programming in C++, Algorithms</span> <br />
		</p>
	</section>
</div>
