import path from 'path';
import { readFileSync } from 'fs';

export const getHomeData = () => {
	const source = path.join(process.cwd(), 'data/about.md');
	const data = readFileSync(source, 'utf8');
	return { data };
}