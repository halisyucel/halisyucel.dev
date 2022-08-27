import { Activity } from '../pages/api/getGithubActivity';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { FaCode } from 'react-icons/fa';
import { Popover, Whisper, Loader } from 'rsuite';

const emptyActivities: Activity[][] = Array.from({ length: 53 }).map(() => {
	return Array.from({ length: 7 }).map(() => ({ date: '', value: 0, level: 0 }));
});

const GithubActivity = () => {
	const scrollArea = useRef<HTMLDivElement>(null);
	const [maxLevel, setMaxLevel] = useState(0);
	const [activities, setActivities] = useState(emptyActivities);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [title, setTitle] = useState<string>('');
	useEffect(() => {
		axios.get('/api/getGithubActivity').then((res) => {
			setTitle(res.data.title);
			setActivities(res.data.activities);
			let _max = 0;
			res.data.activities.forEach((week: Activity[]) => {
				week.forEach((day) => {
					if (day.level > _max) _max = day.level;
				});
			});
			setMaxLevel(_max);
			setIsLoading(false);
		});
	}, []);
	useEffect(() => {
		if (!isLoading && scrollArea.current) {
			scrollArea.current.scroll({
				left: scrollArea.current.scrollWidth,
				behavior: 'smooth',
			});
		}
	}, [isLoading, activities, scrollArea]);
	return (
		<div
			className={
				'w-full h-[200px] mb-8 border-[1px] border-slate-600/10 rounded-xl px-8 flex flex-col justify-center items-start sm:px-6'
			}
		>
			{isLoading ? (
				<div className={'w-full h-full flex items-center justify-center'}>
					<Loader size={'lg'} />
				</div>
			) : (
				<React.Fragment>
					<div className={'w-full flex justify-between items-center mb-3 mt-2'}>
						<h2 className={'font-source-sans text-base font-normal'}>{title}</h2>
						<a
							href={`${process.env.NEXT_PUBLIC_GITHUB_URL}?tab=repositories`}
							target={'_blank'}
							rel={'noopener noreferrer'}
							className={'text-black'}
						>
							<FaCode />
						</a>
					</div>
					<div ref={scrollArea} className={'w-full relative h-[136px] overflow-x-scroll'}>
						<div className={'w-full flex absolute inset-0'}>
							{activities.map((week, index) => (
								<div key={index} className={'mr-1'}>
									{week.map((day, index) => (
										<span
											key={`${day}-${index}`}
											className={
												'block box-content h-3 w-3 border-[0.25px] border-black/10 bg-gray mb-1 last:mb-0'
											}
										>
											{day.value !== 0 && (
												<Whisper
													placement={'top'}
													speaker={
														<Popover>
															<b>{day.value} contributions</b> on{' '}
															{day.date}
														</Popover>
													}
												>
													<span
														style={{ opacity: day.level / maxLevel }}
														className={'block h-3 w-3 bg-green-500'}
													/>
												</Whisper>
											)}
										</span>
									))}
								</div>
							))}
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default GithubActivity;
