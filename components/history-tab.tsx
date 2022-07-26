import { closeTab, HistoryTab as HistoryTabProps } from '../redux/features/history';
import { RootState } from '../redux/store';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaReact } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

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
			className={`group relative text-xs font-source-sans px-2 py-1 bg-white mr-2 rounded-lg cursor-pointer flex justify-center items-center ${
				isOpen ? 'shadow-tab' : ''
			}`}
			onClick={handleClick}
		>
			<FaReact className={'mr-1 text-blue-500'} />
			{name}
			<span
				className={`hidden ml-1 mt-[1px] hover:text-red-500 ${
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
