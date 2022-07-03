import BottomBar from './bottom-bar';
import Paper from './paper';
import TopBar from './top-bar';
import React from 'react';

interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<Paper className={'flex-1 py-2 h-full'}>
			<TopBar />
			<div id={'content'} className={'overflow-auto px-2 h-[calc(100%-5rem)]'}>
				{children}
			</div>
			<BottomBar />
		</Paper>
	);
};

export default Content;
