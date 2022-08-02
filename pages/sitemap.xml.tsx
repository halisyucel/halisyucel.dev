import { GetServerSideProps } from 'next';
import { getBlogData } from '../utils/blog';
import { getProjectsData } from '../utils/projects';

export interface Path {
    url: string;
    changefreq: string;
    priority: number;
}

const Sitemap = () => {};

const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const paths: Path[] = [
        {
            url: '',
            changefreq: 'monthly',
            priority: 1,
        },
        {
            url: '/about',
            changefreq: 'monthly',
            priority: 0.9,
        },
        {
            url: '/projects',
            changefreq: 'monthly',
            priority: 0.9,
        },
        {
            url: '/blog',
            changefreq: 'monthly',
            priority: 0.9,
        },
        {
            url: '/contact',
            changefreq: 'never',
            priority: 0.9,
        }
    ];
    const blogData = getBlogData({ page: 1 });
    const numberOfBlogPages = Math.ceil(blogData.meta.total / blogData.meta.pageSize);
    const projectsData = getProjectsData({ page: 1 });
    const numberOfProjectPages = Math.ceil(projectsData.meta.total / projectsData.meta.pageSize); 
    for (let i = 1; i <= numberOfBlogPages; i++) {
        paths.push({
            url: `/blog/${i}`,
            changefreq: 'monthly',
            priority: 0.9,
        });
    }
    for (let i = 1; i <= numberOfProjectPages; i++) {
        paths.push({
            url: `/projects/${i}`,
            changefreq: 'monthly',
            priority: 0.9,
        });
    }
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset 
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
        >
          ${paths
				.map((path: Path) => {
					return `
                        <url>
                            <loc>${process.env.NEXT_PUBLIC_URL}${path.url}</loc>
                            <xhtml:link rel="alternate" hreflang="en" href="${process.env.NEXT_PUBLIC_URL}/en${path.url}"/>
                            <changefreq>${path.changefreq}</changefreq>
                            <priority>${path.priority}</priority>
                        </url>
                    `;
				})
				.join('')}
        </urlset>
      `;
	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();
	return { props: {} };
};

export default Sitemap;

export { getServerSideProps };