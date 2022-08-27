import { ProjectData } from '../utils/projects';
import texts, { Locale } from '../utils/texts';
import { useRouter } from 'next/router';
import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaSass } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { MdMobileFriendly } from 'react-icons/md';
import {
	SiEslint,
	SiJavascript,
	SiJsonwebtokens,
	SiMysql,
	SiNextdotjs,
	SiPrettier,
	SiReact,
	SiRedux,
	SiStrapi,
	SiTailwindcss,
	SiTypescript,
	SiPwa,
	SiReacttable,
	SiGoogletranslate,
	SiRedis,
	SiVite,
} from 'react-icons/si';
import { IconButton } from 'rsuite';

const getIconsForProject = (iconName: string) => {
	switch (iconName) {
		case 'javascript':
			return <SiJavascript className={'text-yellow-400 bg-black'} />;
		case 'typescript':
			return <SiTypescript className={'text-blue-500 bg-white'} />;
		case 'react':
			return <SiReact className={'text-blue-600'} />;
		case 'redux':
			return <SiRedux className={'text-purple-600'} />;
		case 'next.js':
			return <SiNextdotjs className={'text-real-black'} />;
		case 'sass':
			return <FaSass className={'text-pink-500'} />;
		case 'scss':
			return <FaSass className={'text-pink-500'} />;
		case 'strapi':
			return <SiStrapi className={'text-indigo-400'} />;
		case 'mysql':
			return <SiMysql className={'text-orange-500'} />;
		case 'jsonwebtokens':
			return <SiJsonwebtokens className={'text-teal-400'} />;
		case 'prettier':
			return <SiPrettier className={'text-pink-400'} />;
		case 'eslint':
			return <SiEslint className={'text-indigo-500'} />;
		case 'tailwindcss':
			return <SiTailwindcss className={'text-blue-400'} />;
		case 'react-query':
			return <SiReacttable className={'text-red-600'} />;
		case 'responsive design':
			return <MdMobileFriendly className={'text-red-600'} />;
		case 'sendgrid':
			return <BiMailSend className={'text-blue-600'} />;
		case 'google translate api':
			return <SiGoogletranslate className={'text-blue-500'} />;
		case 'redis':
			return <SiRedis className={'text-red-600'} />;
		case 'vite.js':
			return <SiVite className={'text-purple-600'} />;
		default:
			return null;
	}
};

const Project: React.FC<ProjectData> = ({
	title,
	subtitle,
	description,
	lang,
	demo,
	github,
	hasPWASupport,
	technologies,
}) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	return (
		<div className={'mb-4'}>
			<div className={'flex justify-start items-center md:flex-col md:items-start'}>
				<div className={'flex flex-col md:mb-2'}>
					<div className={'flex justify-start items-end flex-wrap'}>
						{demo ? (
							<a
								href={demo}
								target={'_blank'}
								rel={'noopener noreferrer'}
								className={
									'font-source-sans font-extrabold text-3xl text-black underline hover:text-black focus:text-black'
								}
							>
								{title}
							</a>
						) : (
							<h2
								className={
									'font-source-sans font-extrabold text-3xl text-black underline'
								}
							>
								{title}
							</h2>
						)}
						{hasPWASupport && (
							<span
								className={
									'block bg-white px-3 py-0.5 text-2xl rounded-xl ml-4 mb-0.5 text-real-black md:hidden'
								}
							>
								<SiPwa />
							</span>
						)}
					</div>
					<h3 className={'font-source-sans font-normal text-sm'}>
						{subtitle[router.locale as Locale]}
					</h3>
				</div>
				<span className={'flex-1'} />
				<span className={'flex font-source-sans font-normal text-sm md:mb-1'}>
					<span className={'text-lg mr-2'}>{getIconsForProject(lang.toLowerCase())}</span>
					{router.locale === 'tr' ? (
						<React.Fragment>
							<b>{lang}</b>&nbsp;{t.pages.projects.project.writtenWith}
						</React.Fragment>
					) : (
						<React.Fragment>
							{t.pages.projects.project.writtenWith}&nbsp;<b>{lang}</b>
						</React.Fragment>
					)}
				</span>
			</div>
			<div
				className={'font-source-sans font-normal text-sm mt-1.5 border-l-[1px] pl-2'}
				dangerouslySetInnerHTML={{ __html: description[router.locale as Locale] }}
			/>
			<div className={'flex mt-2 justify-start items-center flex-wrap md:mt-4'}>
				{demo && (
					<a
						href={demo}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={'mr-2 mb-2'}
					>
						<IconButton size={'sm'} appearance={'primary'} icon={<FiExternalLink />} />
					</a>
				)}
				{github && (
					<a
						href={github}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={'mr-2 mb-2'}
					>
						<IconButton size={'sm'} appearance={'primary'} icon={<FiGithub />} />
					</a>
				)}
				<span className={'h-6 w-[1px] bg-black/25 mr-2 mb-2'} />
				{technologies.map((tech, index) => {
					if (tech === '|') {
						return <span key={index} className={'h-6 w-[1px] bg-black/25 mr-2 mb-2'} />;
					}
					const icon = getIconsForProject(tech.toLocaleLowerCase());
					return (
						<span
							key={index}
							className={
								'bg-white h-[28px] px-2.5 mr-2 mb-2 rounded-lg flex justify-center items-center'
							}
						>
							{icon}
							<span
								className={`font-mono text-black text-xs ${
									icon === null ? '' : 'ml-1.5 '
								}`}
							>
								{tech}
							</span>
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
