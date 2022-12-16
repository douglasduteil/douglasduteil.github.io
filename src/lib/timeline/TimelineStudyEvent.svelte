<script lang="ts">
	import GraduationIcon from '$lib/svg/graduation.svelte';
	import type { TimelineEvent } from './types';

	export const { type, title, body } = $$props as TimelineEvent;
</script>

<i aria-label="{type} event"><GraduationIcon /></i>
<div aria-label="event card">
	<h3>{title}</h3>
	<p>{body}</p>
</div>
