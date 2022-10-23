import confetti from 'canvas-confetti';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { FaBug, FaPlay } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { IconButton } from 'rsuite';

import { HistoryTab as HistoryTabProps } from '../redux/features/history';
import { RootState } from '../redux/store';
import texts, { Locale } from '../utils/texts';
import HistoryTab from './history-tab';

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
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				setIsConfettiActive(false);
				return window.clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);

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
					'flex h-10 w-full items-center justify-center border-b-2 border-gray bg-bg-secondary'
				}
			>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className={
						'mr-2 hidden cursor-pointer items-center justify-center rounded-lg bg-white px-2 py-1 text-xs hover:shadow-tab lg:flex'
					}
				>
					<GoThreeBars className={'h-[16px] text-teal-500'} />
				</button>
				<ul
					className={`fixed z-10 rounded-lg bg-white p-2 shadow-tab lg:left-16 lg:top-[5.5rem] md:left-9 md:top-16 ${
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
										'block font-source-sans text-sm font-extrabold text-black'
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
				className={`fixed inset-0 z-10 flex h-screen w-screen justify-center bg-black/60 ${
					isDebuggerOpen ? 'visible' : 'hidden'
				}`}
			>
				<div className={'border-gray-500 mt-4 flex h-6 border-[0.5px] bg-amber-100 px-2'}>
					Paused in debugger
					<span
						onClick={() => setIsDebuggerOpen(false)}
						className={'ml-2 flex h-full cursor-pointer items-center'}
					>
						<FaPlay className={'text-xs text-teal-500'} />
					</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopBar;
