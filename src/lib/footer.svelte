<nav name=" navigation " class=" ">
	<!-- WHO: Home -->
	<a href="/" name=" home " class=" home ">
		<span>Home</span>
		<span class=" arrow ">‹</span>
	</a>

	<!-- WHO: Education -->
	<a href="/edu" name=" education " class=" education ">
		<span>Education</span>
		<span class=" arrow ">‹</span>
	</a>

	<!-- WHO: Experience -->
	<a href="/exp" name=" experience " class=" experience ">
		<span>Experience</span>
		<span class=" arrow ">‹</span>
	</a>

	<!-- WHO: Projects -->
	<a href="/proj" name=" projects " class=" projects ">
		<span>Projects</span>
		<span class=" arrow ">‹</span>
	</a>
</nav>

<style>
	/* INFO: switches footer styling according to screen */
	/* WHY: css was simply faster and easier to implement this than tailwind and actually readable */
	/* TODO: switch to mobile first logic */
	nav {
		/* --background: #1a1a1a; */
		--accent: #df5b53;
		/* --complementary: #53d7df; */
		--offWhite: #e5e4e7;

		display: flex;
		justify-content: space-between;
		font-family: 'Inter';
		font-weight: 600;
		color: var(--accent);
		font-size: 4vmin;
		line-height: 4vmin;
	}

	a {
		display: flex;
		flex-direction: column;
		place-items: center;
	}

	.arrow {
		color: var(--offWhite);
		font-size: 4vmin;
		line-height: 4vmin;
		transform: rotate(270deg);
	}

	@media only screen and (max-width: 1024px) {
		nav {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(2, minmax(0, 1fr));
			gap: 1vmin;

			font-family: 'Inter';
			font-weight: 600;
			font-size: 5vmin;
			line-height: 5vmin;
			color: var(--offWhite);
		}

		a {
			display: flex;
			flex-direction: column;
			justify-content: center;
			place-items: center;
			background: var(--accent);
			height: 12vmin;
		}

		.arrow {
			display: none;
		}
	}
</style>
