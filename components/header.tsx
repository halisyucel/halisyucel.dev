import ExternalLink from './external-link';
import Flex from './flex';
import NavLink from './navlink';
import React from 'react';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';

const Header: React.FC = () => {
	return (
		<header className={'fixed top-0 left-0 w-full h-20 border-b border-gray'}>
			<div
				className={
					'absolute z-0 overflow-hidden w-full h-full bg-black/25 backdrop-blur top-0 left-0'
				}
			/>
			<nav
				className={
					'flex justify-left px-80 items-center absolute top-0 left-0 z-10 w-full h-full'
				}
			>
				<NavLink href={'/'} label={'Home'} />
				<NavLink href={'/projects'} label={'Projects'} />
				<NavLink href={'/blog'} label={'Blog'} />
				<NavLink href={'/bookmarks'} label={'Bookmarks'} />
				<Flex />
				<NavLink href={'/contact'} label={'Contact'} />
				<ExternalLink
					href={process.env.NEXT_PUBLIC_MEDIUM_URL as string}
					icon={<AiFillMediumCircle />}
				/>
				<ExternalLink
					href={process.env.NEXT_PUBLIC_GITHUB_URL as string}
					icon={<AiFillGithub />}
				/>
			</nav>
		</header>
	);
};

export default Header;