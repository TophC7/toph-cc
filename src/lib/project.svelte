<script>
	export let project;
</script>

<div
	class={'card ' + project.className}
	style="background: url(/images/ct-tile.png) repeat center fixed; border-color: {project.sideAccent};"
>
	<div class="card-body">
		<h1 class="card-title">{project.title}</h1>
		<p>{project.text}</p>
		<figure class=" shadow-lg">
			<img src={project.image} class="rounded-lg" />
		</figure>
		<a href={project.link} class="button ml-auto"> GitHub </a>
	</div>
</div>
