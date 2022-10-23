import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';

import Command from '../components/command';
import GithubActivity from '../components/github-activity';
import Layout from '../components/layout';
import Title from '../components/title';
import { getAboutData } from '../utils/about';
import texts, { Locale } from '../utils/texts';

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
			<div
				className={
					'mt-6 hidden h-[280px] w-full rounded-2xl bg-cover bg-center bg-no-repeat xs:block'
				}
				style={{
					backgroundImage: 'url(/pp.jpeg)',
				}}
			/>
			<div
				className={
					'markdown-content mb-6 border-b-[1px] border-slate-600/10 pb-7 font-source-sans xs:border-y-[1px]'
				}
			>
				<ReactMarkdown>{data}</ReactMarkdown>
			</div>
			<div
				className={
					'mb-8 flex items-center justify-center border-b-[1px] border-slate-600/10 pb-6'
				}
			>
				{[
					{
						href: process.env.NEXT_PUBLIC_GITHUB_URL,
						element: <AiFillGithub className={'mr-1.5 text-2xl'} />,
						label: 'GitHub',
					},
					{
						href: process.env.NEXT_PUBLIC_MEDIUM_URL,
						element: <AiFillMediumCircle className={'mr-1.5 text-2xl'} />,
						label: 'Medium',
					},
					{
						href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
						element: <AiFillLinkedin className={'mr-1.5 text-2xl'} />,
						label: 'Linkedin',
					},
				].map((item) => (
					<a
						key={item.label}
						href={item.href}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={
							'mr-6 flex cursor-pointer items-center font-source-sans text-lg text-black last:mr-0'
						}
					>
						{item.element} {item.label}
					</a>
				))}
			</div>
			<GithubActivity />
		</Layout>
	);
};

const getStaticProps: GetStaticProps = async ({ locale }) => {
	const data = getAboutData({ locale: locale as Locale });
	return { props: { data } };
};

export default About;
export { getStaticProps };
