import { HistoryTab as HistoryTabProps } from '../redux/features/history';
import { RootState } from '../redux/store';
import texts, { Locale } from '../utils/texts';
import HistoryTab from './history-tab';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { FaPlay, FaBug } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { IconButton } from 'rsuite';

const TopBar = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	const history = useSelector((state: RootState) => state.history);
	const [isDebuggerOpen, setIsDebuggerOpen] = useState<boolean>(false);
	const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const confettiShow = useCallback(() => {
		setIsConfettiActive(true);

		const duration = 10 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0 };

		const randomInRange = (min: number, max: number) => {
			return Math.random() * (max - min) + min;
		};

		const interval: number = window.setInterval(function () {
			let timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				setIsConfettiActive(false);
				return window.clearInterval(interval);
			}

			let particleCount = 50 * (timeLeft / duration);

			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
				}),
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
				}),
			);
		}, 250);

		return () => clearInterval(interval);
	}, []);
	return (
		<React.Fragment>
			<div
				className={
					'flex justify-center items-center bg-bg-secondary w-full h-10 border-b-2 border-gray'
				}
			>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className={
						'text-xs px-2 py-1 bg-white mr-2 rounded-lg cursor-pointer hidden justify-center items-center lg:flex hover:shadow-tab'
					}
				>
					<GoThreeBars className={'text-teal-500 h-[16px]'} />
				</button>
				<ul
					className={`fixed left-9 top-16 p-2 bg-white rounded-lg shadow-tab animate__animated animate__tada ${
						isMobileMenuOpen ? 'block' : 'hidden'
					}`}
				>
					{[
						{ label: t.navigation.about, href: '/' },
						{ label: t.navigation.blog, href: '/blog' },
						{ label: t.navigation.projects, href: '/projects' },
						{ label: t.navigation.contact, href: '/contact' },
					].map((item, index) => (
						<li key={index} className={'mb-0.5 last:mb-0'}>
							<Link href={item.href}>
								<a
									className={
										'block font-source-sans font-extrabold text-sm text-black'
									}
								>
									{item.label}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<span className={'hidden flex-1 md:block'} />
				<div className={'flex flex-1 overflow-visible md:hidden'}>
					{(history.tabs as HistoryTabProps[]).map((tab, index) => (
						<HistoryTab
							key={index}
							name={tab.name}
							path={tab.path}
							isOpen={tab.isOpen}
						/>
					))}
				</div>
				<IconButton
					size={'xs'}
					className={'mr-[10px]'}
					icon={<FaPlay className={'text-green-500'} />}
					onClick={() => !isConfettiActive && confettiShow()}
				/>
				<IconButton
					size={'xs'}
					icon={<FaBug className={'text-green-500'} />}
					onClick={() => setIsDebuggerOpen(true)}
				/>
			</div>
			<div
				className={`flex justify-center fixed inset-0 w-screen h-screen bg-black/60 z-10 ${
					isDebuggerOpen ? 'visible' : 'hidden'
				}`}
			>
				<div className={'h-6 mt-4 px-2 flex border-[0.5px] border-gray-500 bg-amber-100'}>
					Paused in debugger
					<span
						onClick={() => setIsDebuggerOpen(false)}
						className={'flex items-center h-full ml-2 cursor-pointer'}
					>
						<FaPlay className={'text-xs text-teal-500'} />
					</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopBar;
