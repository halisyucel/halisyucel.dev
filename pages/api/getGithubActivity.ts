import axios from 'axios';
import { JSDOM } from 'jsdom';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Activity {
	date: string;
	value: number;
	level: number;
}

const formatDate = (date: string) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const _date = new Date(date);
	const month = months[_date.getMonth()];
	const day = _date.getDate();
	const year = _date.getFullYear();
	return `${month} ${day}, ${year}`;
};

export default async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await axios.get('https://github.com/halisyucel');
	const dom = new JSDOM(response.data);
	const document = dom.window.document;

	const activities: Activity[][] = [];
	const titleElement = document.querySelector(
		'body > div.application-main > main > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.mt-4.position-relative > div.js-yearly-contributions > div > h2',
	) as HTMLHeadElement;
	const title = (titleElement.textContent as string).replace(/\s+/g, ' ').trim();
	const svgData = Array.from(
		document.querySelectorAll(
			'body > div.application-main > main > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.mt-4.position-relative > div.js-yearly-contributions > div > div > div > svg > g > g',
		),
	);

	svgData.forEach((element) => {
		const week: Activity[] = [];
		const rectElements = Array.from(element.querySelectorAll('rect'));
		for (const rect of rectElements) {
			week.push({
				date: formatDate(rect.getAttribute('data-date') as string),
				value: parseInt(rect?.getAttribute('data-count') || '0'),
				level: parseInt(rect?.getAttribute('data-level') || '0'),
			});
		}
		activities.push(week);
	});

	res.status(200).json({
		title,
		activities,
	});
};
