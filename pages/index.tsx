import Layout from '../components/layout';
import { NextPage } from 'next';
import React from 'react';
import Title from '../components/title';
import texts, { Locale } from '../utils/texts';
import { useRouter } from 'next/router';
import { getAboutData } from '../utils/about';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Command from '../components/command';

export interface AboutProps {
	data: string;
}

const About: NextPage<AboutProps> = ({ data }) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	return (
		<Layout>
			<Title value={t.pages.about.title} />
			<Command className={'mt-2'} location={'~/about'} />
			<div className={'markdown-content font-source-sans'}>
				<ReactMarkdown>
					{data}
				</ReactMarkdown>
			</div>
		</Layout>
	);
};

const getStaticProps: GetStaticProps = async ({ locale }) => {
	const data = getAboutData({ locale: locale as Locale });
	return { props: { data } };
}

export default About;
export { getStaticProps };
