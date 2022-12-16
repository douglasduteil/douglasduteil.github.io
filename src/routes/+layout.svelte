<script>
	import { page } from '$app/stores';
	import '$lib/ciritcal.scss';
	import Menu from './Menu.svelte';
</script>

<svelte:head>
	<title>Douglas DUTEIL > {$page.data.title}</title>
</svelte:head>

<layout
	style="
  --backgroundColor: {$page.data.backgroundColor};
  --backgoundImage: {$page.data.backgoundImage};
"
>
	<menu><Menu /></menu>
	<main class:flat={$page.data.backgroundColor} class:imaged={$page.data.backgoundImage}>
		<slot />
	</main>
</layout>

<style lang="scss">
	@import '$lib/variables';
	@import '$lib/mixins';

	layout {
		@include f-row;
		flex: 1;
		background-color: var(--backgroundColor);
	}

	menu {
		display: flex;
		margin: 0;
		padding: 0;
		position: fixed;

		transform: translateZ(0);
		will-change: transform;
		z-index: 1000;

		// mobile
		@include media-max-phone {
			bottom: 0;
			left: 0;
			right: 0;
		}

		// no mobile
		@include media-min-tablet {
			left: 0;
			top: 0;
			bottom: 0;
		}
	}

	main {
		@include media-min-tablet {
			padding-left: $navbar--width;
		}

		&.imaged {
			background-image: var(--backgoundImage);

			display: flex;
			flex-direction: column;
			background-position: center center;
			background-size: cover;

			@include media-max-phone {
				justify-content: flex-end;
			}
		}
	}
</style>
