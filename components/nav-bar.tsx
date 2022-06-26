import Paper from './paper';
import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import useTexts from '../hooks/useTexts';

const NavBar = () => {
	const texts = useTexts();
	return (
		<Paper className={'w-[320px] mr-10'}>
			<nav>
				<div
					className={'w-full h-[280px] rounded-2xl bg-cover bg-no-repeat bg-center'}
					style={{
						backgroundImage: 'url(/pp.jpeg)',
					}}
				/>
				<h1 className={'font-title leading-none mt-4 pt-2 border-t-2 border-gray'}>Halis Yücel</h1>
				<p className={'font-title text-xl ml-0.5 mb-2 pb-2 border-b-2 border-gray'}>halisyucel</p>
				<ul className={'ml-0.5 border-b-2 pb-2 mb-2 border-gray'}>
					{[
						{ label: texts.navigation.home, href: '/' },
						{ label: texts.navigation.about, href: '/about' },
						{ label: texts.navigation.blog, href: '/blog' },
						{ label: texts.navigation.projects, href: '/projects' },
						{ label: texts.navigation.contact, href: '/contact' },
					].map((item, index) => (
						<li key={index} className={'mb-0.5 last:mb-0'}>
							<Link
								href={`/${item.href}`}
							>
								<a className={'block font-title text-xl text-black'}>
									{item.label}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<ul className={'flex text-[28px] ml-0.5 mb-0'}>
					{[
						{ href: 'https://github.com/halisyucel', icon: <AiFillGithub /> },
						{ href: 'https://medium.com/@halisyucel', icon: <AiFillMediumCircle /> },
					].map((item, index) => (
						<li
							key={index}
							className={'mr-1 last:mr-0'}
						>
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
