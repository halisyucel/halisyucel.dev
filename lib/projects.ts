import { readFileSync } from 'fs';
import path from 'path';

export const getProjects = () => {
	const source = path.join(process.cwd(), 'data/projects.json');
	return JSON.parse(readFileSync(source, 'utf8'));
};
