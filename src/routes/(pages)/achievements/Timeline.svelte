<script lang="ts">
	import TimelineJobEvent from './TimelineJobEvent.svelte';
	interface TimelineEvent {
		title: string;
		body: string;
	}
	export let eventsPerYear = [] as Array<[number, Array<TimelineEvent>]>;
</script>

<ul>
	{#each eventsPerYear as [year, events]}
		<li>
			<time datetime={new Date(year, 0, 1).toDateString()}>{year}</time>

			<ul class="event-list">
				{#each events as event}
					<!-- <code>{JSON.stringify({ event })}</code> -->
					<li class="event"><TimelineJobEvent {...event} /></li>
					<!-- ${events.map(
            <li class="event">${renderEvent[event.type](render)(
              event
            )}</li> -->
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style lang="scss">
	//

	@import '$lib/variables';
	@import '$lib/mixins';

	//

	$line-size: 10px;
	$left-padding: 15px;
	$line-node-border--size: 4px;
	$left-content-pos: calc(($left-padding * 2) + $line-size + ($line-node-border--size * 2));
	$arrow-size: 20px;
	$line-size: 10px;

	//

	:global(section.\/achievements) {
		@include media-max-phone {
			margin-bottom: $navbar--height - 20px;
		}
		@include media-min-tablet {
			padding-right: $left-padding * 2;
			justify-content: center;
		}
	}

	//

	ul {
		padding: 0;
		list-style: none;
		position: relative;
		display: table;
		width: 100%;
		z-index: 0;

		color: black;
		margin: 0 auto 30px;

		// timeline__line
		&:after {
			content: '';
			display: block;
			position: absolute;
			z-index: -1;
			left: calc(2 * $line-node-border--size + $line-size + $left-padding);
			top: 0;
			bottom: -30px;

			width: $line-size;
			margin-left: calc(-1 * $line-size/2);
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
	.event-list {
		@include virgin-ul;
	}
	.event {
		position: relative;

		// from little screen
		@media (min-width: $screen-md-min) {
			margin: auto;
			width: $screen-sm-min;
		}
	}

	time {
		display: block;
		margin: calc($watermark-icon-size * 2 / 3) 0 1em;
		padding-left: $left-content-pos;
		font-size: 50px;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.6);
	}
</style>
