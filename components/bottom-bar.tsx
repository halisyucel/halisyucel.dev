import React, { useEffect, useState } from 'react';
import { BiGitBranch, BiSitemap } from 'react-icons/bi';
import { Tag } from 'rsuite';

import ReturnBack from './return-back';
import ToggleLang from './toggle-lang';

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
				'flex h-10 w-full items-center justify-center border-t-2 border-gray bg-bg-secondary'
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
				<span className={'flex items-center justify-center'}>
					<BiSitemap className={'h-[20px]'} />
					<span className={'md:hidden'}>&nbsp;sitemap</span>
				</span>
			</Tag>
			<Tag
				as={'a'}
				className={'hover:no-underline'}
				href={'https://github.com/halisyucel/halisyucel.dev'}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				<span className={'flex items-center justify-center'}>
					<BiGitBranch className={'h-[20px]'} />
					<span className={'text-green-600 md:hidden'}>&nbsp;main</span>
				</span>
			</Tag>
		</div>
	);
};

export default BottomBar;
