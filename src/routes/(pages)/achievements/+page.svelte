<script lang="ts">
	import { Timeline } from '$lib/timeline';
	import type { TimelineEvent } from '$lib/timeline';
	import _achievements from './achievements.json';

	const achievements = _achievements as Array<[number, Array<TimelineEvent>]>;
</script>

<Timeline eventsPerYear={achievements} />

<style lang="scss">
	//

	@import '$lib/variables';
	@import '$lib/mixins';
	@import '$lib/timeline/variables';

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
