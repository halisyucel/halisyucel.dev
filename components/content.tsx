import BottomBar from './bottom-bar';
import Paper from './paper';
import TopBar from './top-bar';
import React from 'react';

interface ContentProps {
	children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<Paper className={'flex-1 relative py-10'}>
			<TopBar />
			{children}
			<BottomBar />
		</Paper>
	);
};

export default Content;
