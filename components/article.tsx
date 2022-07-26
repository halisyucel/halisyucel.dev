import { BlogData } from '../lib/blog';
import textWithLocales, { Locale } from '../lib/texts-with-locales';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Article: React.FC<BlogData> = ({ title, date, readingTime, description, url, image }) => {
	const { locale } = useRouter();
	const texts = textWithLocales(locale as Locale);
	return (
		<article className={'flex w-full h-32 mb-4 last:mb-0'}>
			<a
				href={url}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'text-black hover:text-black'}
			>
				<figure className={'w-48 h-full mr-4 rounded-2xl overflow-hidden'}>
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
					<h2 className={'text-3xl font-source-sans font-extrabold'}>{title}</h2>
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
					{readingTime} {texts.pages.blog.article.minRead}
				</div>
			</div>
		</article>
	);
};

export default Article;
