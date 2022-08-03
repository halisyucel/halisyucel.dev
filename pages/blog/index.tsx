import Article from '../../components/article';
import Command from '../../components/command';
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';
import Title from '../../components/title';
import { BlogData, getBlogData } from '../../utils/blog';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Helmet } from 'react-helmet';
import texts, { Locale } from '../../utils/texts';

interface BlogProps {
	data: BlogData[];
	meta: {
		currentPage: number;
		pageSize: number;
		total: number;
	};
}

const Blog: NextPage<BlogProps> = ({ data, meta }) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	return (
		<Layout>
			<Helmet>
				<title>halis yücel | {t.pages.blog.headTitle}</title>
			</Helmet>
			<Title value={'blog'} />
			<Command className={'mt-2'} location={'~/blog'} />
			<div className={'mt-4'}>
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
				<Pagination
					currentPage={meta.currentPage}
					pageSize={meta.pageSize}
					total={meta.total}
					onChange={(page) => router.push(`/blog/${page}`)}
				/>
			</div>
		</Layout>
	);
};

const getStaticProps = async () => {
	const { data, meta } = getBlogData({ page: 1 });
	return { props: { data, meta } };
};

export default Blog;
export { getStaticProps };
