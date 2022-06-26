import React, { useCallback, useState } from 'react';
import { FaPlay, FaBug } from 'react-icons/fa';
import { IconButton } from 'rsuite';
import confetti from 'canvas-confetti';

const TopBar = () => {
	const [isDebuggerOpen, setIsDebuggerOpen] = useState<boolean>(false);
	const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);
	const confettiShow = useCallback(() => {
		setIsConfettiActive(true);

		const duration = 10 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0 };

		const randomInRange = (min: number, max: number) => {
			return Math.random() * (max - min) + min;
		}

		const interval: number = window.setInterval(function() {
			let timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				setIsConfettiActive(false);
				return window.clearInterval(interval);
			}

			let particleCount = 50 * (timeLeft / duration);

			confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
			confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
		}, 250);

		return () => clearInterval(interval);
	}, []);
	return (
		<React.Fragment>
			<div
				className={
					'flex justify-center items-center bg-bg-secondary absolute left-0 top-2 w-[calc(100%-2rem)] h-10 mx-4 border-b-2'
				}
			>
				<span className={'flex-1'} />
				<IconButton
					size={'xs'}
					className={'mr-[10px]'}
					icon={<FaPlay className={'text-green-500'}/>}
					onClick={() => !isConfettiActive && confettiShow()}
				/>
				<IconButton
					size={'xs'}
					icon={<FaBug className={'text-green-500'}/>}
					onClick={() => setIsDebuggerOpen(true)}
				/>
			</div>
			<div className={`flex justify-center fixed inset-0 w-screen h-screen bg-gray-500/50 z-10 ${isDebuggerOpen ? 'visible' : 'hidden'}`}>
				<div className={'h-6 mt-4 px-2 flex border-[0.5px] border-gray-500 bg-amber-100'}>
					Paused in debugger
					<span
						onClick={() => setIsDebuggerOpen(false)}
						className={'flex items-center h-full ml-2 cursor-pointer'}>
						<FaPlay className={'text-xs text-teal-500'}/>
					</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopBar;
