import type { PageLoad } from './$types';
import CommentIcon from '$lib/svg/comment.svelte';

export const load = (() => {
	return {
		title: 'Contact',
		backgroundColor: '#F23030',
		watermark: CommentIcon
	};
}) satisfies PageLoad;
