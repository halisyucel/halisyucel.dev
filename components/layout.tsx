import { RootState } from '../redux/store';
import Content from './content';
import NavBar from './nav-bar';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { theme } = useSelector((state: RootState) => state.settings);
	useEffect(() => {
		if (theme === 'dark') document.body.classList.add('rs-theme-dark');
		else document.body.classList.remove('rs-theme-dark');
	}, [theme]);
	return (
		<React.Fragment>
			<Helmet>
				<title>halis yücel</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
				<meta name="description" content={'Halis Yücel'} /> {/* TODO bunu değiştir sonra */}
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/favicon.png" type={'image/png'} />
				<meta property="og:title" content={'Halis Yücel'} />
				<meta property="og:site_name" content={'Halis Yücel'} />
				<meta property="og:url" content={'https://halisyucel.me/'} />
				<meta property="og:description" content={'Halis Yücel'} /> {/* TODO bunu değiştir sonra */}
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="app" />
				<meta name="twitter:title" content={'Halis Yücel'} />
				<meta name="twitter:description" content={'Halis Yücel'} /> {/* TODO bunu değiştir sonra */}
			</Helmet>
			<NavBar />
			<Content>{children}</Content>
		</React.Fragment>
	);
};

export default Layout;
