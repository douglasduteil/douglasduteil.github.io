<script lang="ts">
	import SuitcaseIcon from '$lib/svg/suitcase.svelte';
	import type { TimelineEvent } from './types';

	export const { type, title, body } = $$props as TimelineEvent;
</script>

<i aria-label="{type} event"><SuitcaseIcon /></i>
<div aria-label="event card">
	<h3>{title}</h3>
	<p>{body}</p>
</div>
