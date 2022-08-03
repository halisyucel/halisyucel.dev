import Command from '../components/command';
import Layout from '../components/layout';
import Title from '../components/title';
import { getAboutData } from '../utils/about';
import texts, { Locale } from '../utils/texts';
import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';

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
			<div className={'markdown-content font-source-sans mb-12'}>
				<ReactMarkdown>{data}</ReactMarkdown>
			</div>
		</Layout>
	);
};

const getStaticProps: GetStaticProps = async ({ locale }) => {
	const data = getAboutData({ locale: locale as Locale });
	return { props: { data } };
};

export default About;
export { getStaticProps };
