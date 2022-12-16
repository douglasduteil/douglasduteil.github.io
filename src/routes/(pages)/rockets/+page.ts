import type { PageLoad } from './$types';
import RocketIcon from '$lib/svg/rocket.svelte';

export const load = (() => {
	return {
		title: 'Rockets',
		backgroundColor: '#525A16',
		watermark: RocketIcon
	};
}) satisfies PageLoad;
