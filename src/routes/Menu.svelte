<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
	import FaceIcon from '$lib/svg/face.svelte';
	import RocketIcon from '$lib/svg/rocket.svelte';
	import CommentIcon from '$lib/svg/comment.svelte';
	import TrophyIcon from '$lib/svg/trophy.svelte';
</script>

<nav>
	<a class:active={$page.url.pathname == base + "/me"} href="{base}/me">
    <FaceIcon />
    <span class="sr-only">Me</span>
  </a>
	<a class:active={$page.url.pathname == base + "/achievements"} href="{base}/achievements">
    <TrophyIcon />
    <span class="sr-only">Achievements</span>
  </a>
	<a class:active={$page.url.pathname == base + "/rockets"} href="{base}/rockets">
    <RocketIcon />
    <span class="sr-only">Rockets</span>
  </a>
	<a class:active={$page.url.pathname == base + "/contact"} href="{base}/contact">
    <CommentIcon />
    <span class="sr-only">Contact</span>
  </a>
</nav>

<style lang="scss">
	//

	@import '$lib/_variables.scss';
	@import '$lib/_mixins.scss';

	//

	nav {
		font-size: 1.5em;
		color: #fff;
		display: flex;
		width: 100%;

		@include media-min-tablet {
			flex-direction: column;
		}
	}

	a {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgba(0, 0, 0, 0.6);
		color: #eee;
		transition: 0.2s ease;
		transition-property: background-color, color;

		&:hover {
			background-color: rgba(0, 0, 0, 0.7);
		}

		&.active {
			color: #fff;
			background-color: rgba(0, 0, 0, 0.8);
		}

		// mobile
		@include media-max-phone {
			height: 50px;
		}

		// no mobile
		@include media-min-tablet {
			width: $navbar--width;
		}
	}
</style>
