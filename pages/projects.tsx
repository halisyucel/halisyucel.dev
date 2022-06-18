import Layout from '../components/layout';
import Project, { Project as ProjectInterface } from '../components/project';
import { getProjects } from '../lib/projects';
import { NextPage, GetStaticProps } from 'next';
import React from 'react';

interface Projects {
	data: ProjectInterface[];
}

const Projects: NextPage<Projects> = ({ data }) => {
	return (
		<Layout>
			<h1 className={'text-5xl font-title font-extrabold text-gradient w-fit pb-1 mb-8'}>
				Projects
			</h1>
			{data.map((project, index) => (
				<Project
					key={index}
					title={project.title}
					summary={project.summary}
					tags={project.tags}
					live={project.live}
					repository={project.repository}
				/>
			))}
		</Layout>
	);
};

// TODO şu type kontrolünü öbür sayfalra da yap
const getStaticProps: GetStaticProps = async () => {
	const data = getProjects();
	return { props: { data } };
};

export default Projects;
export { getStaticProps };
