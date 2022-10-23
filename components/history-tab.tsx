import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaReact } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { closeTab, HistoryTab as HistoryTabProps } from '../redux/features/history';
import { RootState } from '../redux/store';

const HistoryTab: React.FC<HistoryTabProps> = ({ name, path, isOpen }) => {
	const { tabs } = useSelector((state: RootState) => state.history);
	const dispatch = useDispatch();
	const router = useRouter();
	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (event.target === event.currentTarget) {
				router.push(path);
			}
		},
		[router, path],
	);
	const handleClose = useCallback(() => {
		if (isOpen) {
			const _tabs = { ...tabs };
			const index = tabs.findIndex((tab) => tab.name === name);
			if (index === 0) router.push(_tabs[1].path);
			else router.push(_tabs[index - 1].path);
		}
		dispatch(closeTab(name));
	}, [dispatch, router, tabs, name, isOpen]);
	return (
		<div
			className={`group relative mr-2 flex cursor-pointer items-center justify-center rounded-lg bg-white px-2 py-1 font-source-sans text-xs ${
				isOpen ? 'shadow-tab' : ''
			}`}
			onClick={handleClick}
		>
			<FaReact className={'mr-1 text-blue-500'} />
			{name}
			<span
				className={`ml-1 mt-[1px] hidden hover:text-red-500 ${
					tabs.length !== 1 ? 'group-hover:block' : ''
				}`}
				onClick={() => handleClose()}
			>
				<RiCloseCircleFill />
			</span>
		</div>
	);
};

export default HistoryTab;
