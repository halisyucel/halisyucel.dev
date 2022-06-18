import React from 'react';
import { BiLink } from 'react-icons/bi';
import { FaGithubAlt } from 'react-icons/fa';

export interface Project {
	title: string;
	summary: string;
	tags: string[];
	live?: string;
	repository?: string;
}

const Project: React.FC<Project> = ({ title, summary, tags, live, repository }) => {
	return (
		<div className={'w-full project-gradient py-6 pr-8 rounded-3xl'}>
			<h2 className={'text-2xl font-title font-extrabold mb-3'}>{title}</h2>
			<p className={'font-text text-sm font-light mb-3'}>{summary}</p>
			<div className={'flex mb-3'}>
				{tags.map((tag, index) => (
					<span key={index} className={'font-title font-extrabold mr-3'}>
						{tag}
					</span>
				))}
			</div>
			<div className={'flex'}>
				{live && (
					<a
						className={'project-link text-red'}
						href={live}
						target={'_blank'}
						rel={'noreferrer noopener'}
					>
						<BiLink />
						<span className={'ml-1.5'}>live</span>
					</a>
				)}
				{repository && (
					<a
						className={'project-link text-lightblue'}
						href={repository}
						target={'_blank'}
						rel={'noreferrer noopener'}
					>
						<FaGithubAlt />
						<span className={'ml-1.5'}>repository</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
