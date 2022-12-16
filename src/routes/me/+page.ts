import type { PageLoad } from './$types';

const gravatarPic = '//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1';

export const load = (() => {
	return {
		title: 'Me',
		backgoundImage: [gravatarPic + '?s=1024', gravatarPic, '/mini_me.jpeg']
			.map((url) => `url('${url}')`)
			.join(',')
	};
}) satisfies PageLoad;
