export const routesToNames: { [key: string]: string } = {
	'/': 'About',
	'/blog': 'Blog',
	'/blog/[page]': 'Blog',
	'/projects': 'Projects',
	'/projects/[page]': 'Projects',
	'/contact': 'Contact',
};

export const routesToBack: { [key: string]: string | null } = {
	'/': 'shake',
	'/blog': '/',
	'/blog/[page]': '/blog',
	'/projects': '/',
	'/projects/[page]': '/projects',
	'/contact': '/',
};