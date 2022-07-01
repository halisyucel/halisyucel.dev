type Locale = 'tr' | 'en';

const textWithLocales: (locale: Locale) => { [key: string]: any } = (locale) => ({
	"tr": {
		"navigation": {
			"home": "ana sayfa",
			"about": "hakkımda",
			"blog": "blog",
			"projects": "projeler",
			"contact": "iletişim",
		},
		"pages": {
			"notFound": "aradığınız sayfa bulunamadı",
		}
	},
	"en": {
		"navigation": {
			"home": "home",
			"about": "about",
			"blog": "blog",
			"projects": "projects",
			"contact": "contact me",
		},
		"pages": {
			"notFound": "page not found",
		}
	}
}[locale]);

export type { Locale };
export default textWithLocales;