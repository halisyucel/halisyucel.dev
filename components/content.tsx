import React from 'react';

import BottomBar from './bottom-bar';
import Paper from './paper';
import TopBar from './top-bar';

interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<Paper className={'h-full flex-1 py-2'}>
			<TopBar />
			<div id={'content'} className={'h-[calc(100%-5rem)] overflow-auto px-2'}>
				{children}
			</div>
			<BottomBar />
		</Paper>
	);
};

export default Content;
