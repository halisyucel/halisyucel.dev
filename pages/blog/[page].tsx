import { GetStaticPaths, GetStaticProps } from 'next';

import { getBlogData } from '../../utils/blog';
import Blog from './index';

const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const { meta } = getBlogData({ page: 1 });
	const paths = [];
	const numberOfPages = Math.ceil(meta.total / meta.pageSize);
	for (let i = 1; i <= numberOfPages; i++)
		for (const locale of locales as string[])
			paths.push({ locale, params: { page: i.toString() } });
	return { paths, fallback: false };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data, meta } = getBlogData({ page: parseInt(params?.page as string) });
	return { props: { data, meta } };
};

export default Blog;
export { getStaticPaths, getStaticProps };
