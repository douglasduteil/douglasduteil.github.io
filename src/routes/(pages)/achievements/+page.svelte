<script>
	import Timeline from './Timeline.svelte';
	import achievements from './achievements.json';
</script>

<Timeline eventsPerYear={achievements} />

<style lang="scss">
	//

	@import '$lib/variables';
	@import '$lib/mixins';

	//

	$left-padding: 15px;

	// abs-content
	:global(section.\/achievements) {
		// to modile
		@include media-max-phone {
			margin-bottom: $navbar--height - 20px;
		}

		// from tablet
		@include media-min-tablet {
			padding-right: $left-padding * 2;
			justify-content: center;
		}
	}
</style>
