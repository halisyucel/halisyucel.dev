import texts, { Locale } from '../utils/texts';
import Paper from './paper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';

const NavBar = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<Paper className={'w-[320px] mr-10 '}>
			<nav className={'relative h-full pb-10'}>
				<div
					className={'w-full h-[280px] rounded-2xl bg-cover bg-no-repeat bg-center'}
					style={{
						backgroundImage: 'url(/pp.jpeg)',
					}}
				/>
				<h1
					className={
						'font-source-sans leading-none mt-4 pt-2 border-t-2 border-gray text-black'
					}
				>
					Halis Yücel
				</h1>
				<p
					className={
						'font-source-sans text-xl ml-0.5 mb-2 pb-2 border-b-2 border-gray text-black'
					}
				>
					halisyucel
				</p>
				<ul className={'ml-0.5 mb-2'}>
					{[
						{ label: t.navigation.about, href: '/' },
						{ label: t.navigation.blog, href: '/blog' },
						{ label: t.navigation.projects, href: '/projects' },
						{ label: t.navigation.contact, href: '/contact' },
					].map((item, index) => (
						<li key={index} className={'mb-0.5 last:mb-0'}>
							<Link href={item.href}>
								<a className={'block font-source-sans text-xl text-black'}>
									{item.label}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<ul className={'absolute w-full left-0 bottom-0 flex text-[28px] pt-2 ml-0.5 mb-0 border-t-2 border-gray'}>
					{[
						{ href: 'https://github.com/halisyucel', icon: <AiFillGithub /> },
						{ href: 'https://medium.com/@halisyucel', icon: <AiFillMediumCircle /> },
					].map((item, index) => (
						<li key={index} className={'mr-1 last:mr-0'}>
							<a
								href={item.href}
								target={'_blank'}
								rel={'noopener noreferrer'}
								className={'text-black hover:text-black'}
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</Paper>
	);
};

export default NavBar;
