<script>
	import SuitcaseIcon from '$lib/svg/suitcase.svelte';

	export let title = '';
	export let body = '';
</script>

<i><SuitcaseIcon /></i>
<div>
	<h3>{title}</h3>
	<p>{body}</p>
</div>

<!-- <i class=${classes.icon}>${suitcaseIcon(render, event)}</i>
<div class=${classes.body}>

  <h3>${event.title}</h3>
  <p>${event.body}</p>
</div> -->
<style lang="scss">
	//

	@import '$lib/variables';
	@import '$lib/mixins';

	$line-size: 10px;
	$left-padding: 15px;
	$line-node-border--size: 4px;
	$left-content-pos: calc(($left-padding * 2) + $line-size + ($line-node-border--size * 2));
	$arrow-size: 20px;
	$line-size: 10px;

	div {
		position: relative;
		margin: 5px 0 30px calc($left-content-pos + ($arrow-size * 2) + 5px);

		background-color: white;
		padding: 1rem 2rem;

		:global(a) {
			color: #333;
		}

		> h3 {
			margin: 0 0 5px;
		}
	}

	i {
		$size: 40px;
		$inner-space: 4px;
		width: $size;
		height: $size;
		speak: none;

		position: absolute;
		color: #fff;
		border-radius: 50%;
		background-color: $smalt-blue;
		padding: $inner-space;
		box-shadow: 0 0 0 $line-node-border--size #fff;
		left: calc(($left-padding * 2) + $line-node-border--size);
		top: -4px;
		margin: 0 0 0 -25px;

		display: flex;
		align-items: center;
		justify-content: center;

		> :global(svg) {
			$radio: 0.6;
			width: calc($size * $radio);
			height: calc($size * $radio);
		}

		// to modile
		@include media-max-phone {
			font-size: 1.4em;
		}
	}
</style>
