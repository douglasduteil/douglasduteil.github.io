import type { PageLoad } from './$types';
import TrophyIcon from '$lib/svg/trophy.svelte';

export const load = (() => {
	return {
		title: 'Achievements',
		backgroundColor: '#4F8C86',
		watermark: TrophyIcon
	};
}) satisfies PageLoad;
