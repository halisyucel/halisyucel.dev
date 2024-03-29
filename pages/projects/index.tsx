import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import Command from '../../components/command';
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';
import Project from '../../components/project';
import Title from '../../components/title';
import { getProjectsData, ProjectData } from '../../utils/projects';
import texts, { Locale } from '../../utils/texts';

interface ProjectsProps {
	data: ProjectData[];
	meta: {
		currentPage: number;
		pageSize: number;
		total: number;
	};
}

const Projects: NextPage<ProjectsProps> = ({ data, meta }) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	return (
		<Layout>
			<Head>
				<title>halis yücel | {t.pages.projects.headTitle}</title>
			</Head>
			<Title value={t.pages.projects.title} />
			<Command className={'mt-2'} location={'~/projects'} />
			<div className={'mt-4'}>
				{data.map((project: ProjectData) => (
					<Project
						key={project.id}
						id={project.id}
						title={project.title}
						subtitle={project.subtitle}
						description={project.description}
						lang={project.lang}
						demo={project.demo}
						github={project.github}
						hasPWASupport={project.hasPWASupport}
						technologies={project.technologies}
					/>
				))}
			</div>
			<div className={'mt-2 flex w-full items-center justify-center py-4'}>
				<Pagination
					currentPage={meta.currentPage}
					pageSize={meta.pageSize}
					total={meta.total}
					onChange={(page) => router.push(`/projects/${page}`)}
				/>
			</div>
		</Layout>
	);
};

const getStaticProps = async () => {
	const { data, meta } = getProjectsData({ page: 1 });
	return { props: { data, meta } };
};

export default Projects;
export { getStaticProps };
