export const routesToNames: { [key: string]: string } = {
	'/': 'About',
	'/blog': 'Blog',
	'/blog/[page]': 'Blog',
	'/projects': 'Projects',
	'/projects/[page]': 'Projects',
	'/contact': 'Contact',
};

export const routesToBack: { [key: string]: string | null } = {
	'/': null,
	'/blog': '/',
	'/blog/[page]': '/blog',
	'/projects': '/',
	'/projects/[page]': '/projects',
	'/contact': '/',
};