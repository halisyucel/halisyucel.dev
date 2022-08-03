import { BlogData } from '../utils/blog';
import texts, { Locale } from '../utils/texts';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

const Article: React.FC<BlogData> = ({ title, date, readingTime, description, url, image }) => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<article className={'flex w-full h-32 mb-4 last:mb-0 md:flex-col md:h-[unset] md:mb-6'}>
			<a
				href={url}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'text-black hover:text-black md:mb-4'}
			>
				<figure className={'w-48 h-full mr-4 overflow-hidden md:h-64 md:w-full flex items-center justify-center xs:h-52 xxs:h-40'}>
					<img className={'w-full'} src={image} alt={title} />
				</figure>
			</a>
			<div className={'flex-1 h-full flex flex-col'}>
				<a
					href={url}
					target={'_blank'}
					rel={'noopener noreferrer'}
					className={'text-black hover:text-black pb-1'}
				>
					<h2 className={'text-3xl font-source-sans font-extrabold sm:text-xl sm:mb-2'}>{title}</h2>
				</a>
				<p
					className={
						'flex-1 overflow-hidden font-source-sans font-normal text-sm pl-2 border-l-[1px]'
					}
				>
					{description}
				</p>
				<div className={'text-xs font-light py-1'}>
					{moment(date).format('MMM Do, YYYY')}
					&nbsp;&#8226;&nbsp;
					{readingTime} {t.pages.blog.article.minRead}
				</div>
			</div>
		</article>
	);
};

export default Article;
