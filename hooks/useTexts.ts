import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface TextsJSON {
	"tr": {
		[key: string]: any;
	};
	"en": {
		[key: string]: any;
	};
}

const textsJSON: TextsJSON = {
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

	}
};

const useTexts: () => { [key: string]: any } = () => {
	const { language } = useSelector((state: RootState) => state.settings);
	return textsJSON[language];
}

export default useTexts;