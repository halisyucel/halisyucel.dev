import { readFileSync } from 'fs';
import path from 'path';

export interface ProjectData {
	id: number;
	title: string;
	subtitle: {
		en: string;
		tr: string;
	};
	description: {
		en: string;
		tr: string;
	};
	lang: string;
	demo: string | null;
	github: string | null;
	hasPWASupport: boolean;
	technologies: string[];
}

interface GetProjectsData {
	page: number;
}

export let getProjectsData: (props: GetProjectsData) => {
	data: ProjectData[];
	meta: {
		currentPage: number;
		pageSize: number;
		total: number;
	};
};

getProjectsData = ({ page }) => {
	const fileData = readFileSync(path.join(process.cwd(), 'data', 'projects.json'), {
		encoding: 'utf8',
		flag: 'r',
	});

	const data: ProjectData[] = JSON.parse(fileData).slice((page - 1) * 10, page * 10);
	const meta = {
		currentPage: page,
		pageSize: 10,
		total: JSON.parse(fileData).length,
	};

	return { data, meta };
};
