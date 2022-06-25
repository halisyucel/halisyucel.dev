import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NavBar from './nav-bar';
import Content from './content';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { theme } = useSelector((state: RootState) => state.settings);
	useEffect(() => {
		if (theme === 'dark')
			document.body.classList.add('rs-theme-dark');
		else
			document.body.classList.remove('rs-theme-dark');
	}, [theme]);
	return (
		<React.Fragment>
			<NavBar />
			<Content>
				{children}
			</Content>
		</React.Fragment>
	);
};

export default Layout;
