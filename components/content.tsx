import React from 'react';
import Paper from './paper';
import SideBar from './side-bar';

interface ContentProps {
	children: React.ReactNode;
}

// TODO üstede topbar yap

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<Paper className={'flex-1 relative'}>
			{children}
			<SideBar />
		</Paper>
	);
};

export default Content;
