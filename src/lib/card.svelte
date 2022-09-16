<script>
	export let sideAccent = '#DF5B53';
	export let title = 'nerf this.';
	export let text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aspernatur cupiditate labore obcaecati officiis nisi eaque temporibus.';
	export let link = '#';
	export let image = '/images/morgana-nt.png';
	export let className = 'card';
</script>

<div
	class={'card ' + className}
	style="background: url(/images/ct-tile.png) repeat center fixed; border-color: {sideAccent};"
>
	<div class="card-body">
		<h1 class="card-title">{title}</h1>
		<p>{text}</p>
		<figure class=" shadow-lg">
			<img src={image} class="rounded-lg" />
		</figure>
		<a href={link} class="button ml-auto"> GitHub </a>
	</div>
</div>
