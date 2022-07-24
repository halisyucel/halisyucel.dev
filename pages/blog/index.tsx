import Layout from '../../components/layout';
import { NextPage } from 'next';
import React from 'react';
import Title from '../../components/title';
import Command from '../../components/command';
import { BlogData, getBlogData } from '../../lib/blog';
import Article from '../../components/article';
import Pagination from '../../components/pagination';
import { useRouter } from 'next/router';

interface BlogProps {
	data: BlogData[];
	meta: {
		currentPage: number;
		pageSize: number;
		total: number;
	}
}

const Blog: NextPage<BlogProps> = ({ data, meta }) => {
	const router = useRouter();
	return (
		<Layout>
			<Title value={'blog'} />
			<Command
				className={'mt-2'}
				location={'~/blog'}
			/>
			<div>
				{data.map((article) => (
					<Article
						key={article.id}
						id={article.id}
						title={article.title}
						date={article.date}
						readingTime={article.readingTime}
						description={article.description}
						url={article.url}
						image={article.image}
					/>
				))}
			</div>
			<div className={'py-4 mt-2 w-full flex justify-center items-center'}>
				<Pagination />
			</div>
		</Layout>
	);
};

const getStaticProps = async () => {
	const { data, meta } = getBlogData({ page: 1 });
	return { props: { data, meta } };
}

export default Blog;
export { getStaticProps };