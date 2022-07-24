import React from 'react';
import Blog from './index';
import { GetStaticProps } from 'next';
import { getBlogData } from '../../lib/blog';

// TODO buralarda bir yerlerde sıkıntılar var

const getStaticPaths = async () => {
	const { meta } = getBlogData({ page: 1 });
	const paths = [];
	for (let i = 1; i <= meta.total; i++) {
		paths.push({ params: { page: i.toString() } });
	}
	return { paths, fallback: false };
}

const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data, meta } = getBlogData({ page: 1 });
	return {
		props: {
			data,
			meta,
		},
	};
}

export default Blog;
export { getStaticPaths, getStaticProps };