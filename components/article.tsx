import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

import { BlogData } from '../utils/blog';
import texts, { Locale } from '../utils/texts';

const Article: React.FC<BlogData> = ({ title, date, readingTime, description, url, image }) => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<article className={'mb-4 flex h-32 w-full last:mb-0 md:mb-6 md:h-[unset] md:flex-col'}>
			<a
				href={url}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'text-black hover:text-black md:mb-4'}
			>
				<figure
					className={
						'mr-4 flex h-full w-48 items-center justify-center overflow-hidden md:h-64 md:w-full xs:h-52 xxs:h-40'
					}
				>
					<img className={'w-full'} src={image} alt={title} />
				</figure>
			</a>
			<div className={'flex h-full flex-1 flex-col'}>
				<a
					href={url}
					target={'_blank'}
					rel={'noopener noreferrer'}
					className={'pb-1 text-black hover:text-black'}
				>
					<h2 className={'font-source-sans text-3xl font-extrabold sm:mb-2 sm:text-xl'}>
						{title}
					</h2>
				</a>
				<p
					className={
						'flex-1 overflow-hidden border-l-[1px] pl-2 font-source-sans text-sm font-normal'
					}
				>
					{description}
				</p>
				<div className={'py-1 text-xs font-light'}>
					{moment(date).format('MMM Do, YYYY')}
					&nbsp;&#8226;&nbsp;
					{readingTime} {t.pages.blog.article.minRead}
				</div>
			</div>
		</article>
	);
};

export default Article;
