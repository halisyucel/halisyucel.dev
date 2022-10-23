import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';

import texts, { Locale } from '../utils/texts';
import Paper from './paper';

const NavBar = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<Paper className={'mr-10 w-[320px] lg:hidden'}>
			<nav className={'relative h-full pb-10'}>
				<div
					className={'h-[280px] w-full rounded-2xl bg-cover bg-center bg-no-repeat'}
					style={{
						backgroundImage: 'url(/pp.jpeg)',
					}}
				/>
				<h1
					className={
						'mt-4 border-t-2 border-gray pt-2 font-source-sans leading-none text-black'
					}
				>
					Halis Yücel
				</h1>
				<p
					className={
						'ml-0.5 mb-2 border-b-2 border-gray pb-2 font-source-sans text-xl text-black'
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
				<ul
					className={
						'absolute left-0 bottom-0 ml-0.5 mb-0 flex w-full border-t-2 border-gray pt-2 text-[28px]'
					}
				>
					{[
						{ href: process.env.NEXT_PUBLIC_GITHUB_URL, icon: <AiFillGithub /> },
						{ href: process.env.NEXT_PUBLIC_MEDIUM_URL, icon: <AiFillMediumCircle /> },
						{ href: process.env.NEXT_PUBLIC_LINKEDIN_URL, icon: <AiFillLinkedin /> },
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
