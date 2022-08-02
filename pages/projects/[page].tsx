import { getProjectsData } from '../../utils/projects';
import Projects from './index';
import { GetStaticProps, GetStaticPaths } from 'next';

const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const { meta } = getProjectsData({ page: 1 });
	const paths = [];
	const numberOfPages = Math.ceil(meta.total / meta.pageSize);
	for (let i = 1; i <= numberOfPages; i++)
		for (const locale of locales as string[])
			paths.push({ locale, params: { page: i.toString() } });
	return { paths, fallback: false };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data, meta } = getProjectsData({ page: parseInt(params?.page as string) });
	return { props: { data, meta } };
};

export default Projects;
export { getStaticPaths, getStaticProps };
