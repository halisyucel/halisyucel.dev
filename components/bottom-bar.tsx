import ReturnBack from './return-back';
import ToggleThemeButton from './toggle-theme-button';
import React, { useState, useEffect } from 'react';
import { BiGitBranch } from 'react-icons/bi';
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
				'flex justify-center items-center bg-bg-secondary absolute left-0 bottom-2 w-[calc(100%-2rem)] h-10 mx-4 border-t-2'
			}
		>
			<ReturnBack />
			<ToggleThemeButton />
			<span className={'flex-1'} />
			<Tag>
				{positions[0]}:{positions[1]}
			</Tag>
			<Tag>UTF-8</Tag>
			<Tag>Tab</Tag>
			<Tag
				as={'a'}
				className={'hover:no-underline'}
				href={'https://github.com/halisyucel/halisyucel.me'}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				<span className={'flex justify-center items-center'}>
					<BiGitBranch />
					&nbsp;
					<span className={'text-green-600'}>main</span>
				</span>
			</Tag>
		</div>
	);
};

export default BottomBar;
