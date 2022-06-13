import type { NextPage } from 'next';
import Layout from '../components/layout';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import { getHomeData } from '../lib/home';

interface Props {
	data: string;
}

const Home: NextPage<Props> = ({ data }) => {
	return (
		<Layout>
			<h1 className={'text-5xl font-text font-light'}>
				Hey, I&apos;m <span className={'font-bold text-gradient'}>Halis Yücel</span> 👋
			</h1>
			<ReactMarkdown className={'mt-12 text-lg font-text font-light'}>
				{data}
			</ReactMarkdown>
		</Layout>
	);
};

const getStaticProps = async () => {
	const { data } = getHomeData();
	return { props: { data } };
}

export default Home;
export { getStaticProps };