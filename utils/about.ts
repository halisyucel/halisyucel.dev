import { Locale } from './texts';
import { readFileSync } from 'fs';
import path from 'path';

export interface GetAboutData {
	locale: Locale;
}

export let getAboutData: (props: GetAboutData) => string;

getAboutData = ({ locale }) => {
	const fileData = readFileSync(path.join(process.cwd(), 'data', 'about', `${locale}.md`), {
		encoding: 'utf8',
		flag: 'r',
	});
	return fileData;
};
