import { readFileSync } from 'fs';
import path from 'path';

export interface BlogData {
	id: number;
	title: string;
	date: string;
	readingTime: number;
	description: string;
	url: string;
	image: string;
}

interface GetBlogData {
	page: number;
}

export let getBlogData: (props: GetBlogData) => {
	data: BlogData[];
	meta: {
		currentPage: number;
		pageSize: number;
		total: number;
	};
};

getBlogData = ({ page }) => {
	const fileData = readFileSync(path.join(process.cwd(), 'data', 'blog.json'), {
		encoding: 'utf8',
		flag: 'r',
	});

	const data: BlogData[] = JSON.parse(fileData).slice((page - 1) * 10, page * 10);
	const meta = {
		currentPage: page,
		pageSize: 10,
		total: JSON.parse(fileData).length,
	};

	return { data, meta };
};
