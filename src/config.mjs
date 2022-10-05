export const SITE = {
	name: 'NoToPests',

	origin: 'https://notopests.com',
	basePathname: '/',

	title: 'Pest Control Near You | Call For A Free Estimate | No To Pests',
	description: 'We make pest control simple. Call us, schedule your free inspection, and let us do the rest! Local pest removal specialists available 24/7.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: true,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
