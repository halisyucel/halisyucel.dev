import ReturnBack from './return-back';
import ToggleLang from './toggle-lang';
import React, { useState, useEffect } from 'react';
import { BiGitBranch, BiSitemap } from 'react-icons/bi';
import { Tag } from 'rsuite';

const BottomBar = () => {
	const [positions, setPositions] = useState<number[]>([0, 0]);
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPositions([e.clientX, e.clientY]);
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<div
			className={
				'flex justify-center items-center bg-bg-secondary w-full h-10 border-t-2 border-gray'
			}
		>
			<ReturnBack className={'mr-[10px] sm:!hidden'} />
			<ToggleLang />
			<span className={'flex-1'} />
			<Tag className={'md:!hidden'}>
				{positions[0]}:{positions[1]}
			</Tag>
			<Tag>UTF-8</Tag>
			<Tag>Tab</Tag>
			<Tag
				as={'a'}
				className={'hover:no-underline'}
				href={'/sitemap.xml'}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				<span className={'flex justify-center items-center'}>
					<BiSitemap className={'h-[20px]'} />
					<span className={'md:hidden'}>&nbsp;sitemap</span>
				</span>
			</Tag>
			<Tag
				as={'a'}
				className={'hover:no-underline'}
				href={'https://github.com/halisyucel/halisyucel.me'}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				<span className={'flex justify-center items-center'}>
					<BiGitBranch className={'h-[20px]'} />
					<span className={'text-green-600 md:hidden'}>&nbsp;main</span>
				</span>
			</Tag>
		</div>
	);
};

export default BottomBar;
