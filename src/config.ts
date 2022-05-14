export type SocialLinks = {
	[key: string]: SocialLink;
};

export type SocialLink = {
	url: string;
	name: string;
	icon: string;
};

export const SOCIAL_LINKS: SocialLinks = {
	facebook: {
		url: 'https://www.facebook.com/TacomaPorchFest',
		name: 'Facebook',
		icon: 'facebook',
	},
	instagram: {
		url: 'https://instagram.com/tacomaporchfest',
		name: 'Instagram',
		icon: 'instagram',
	},
	email: {
		url: 'mailto:tacomaporchfest@gmail.com',
		name: 'Email',
		icon: 'envelope-fill',
	},
};

/**
 * In the event that no props are passed into the <MainHead> component,
 * these values will be used for page information / open graph metadata.
 */
export const SITE_DETAILS = {
	title: 'Tacoma Porchfest',
	description: '',
	creator: '@',
};
