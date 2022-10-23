import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import texts, { Locale } from '../utils/texts';
import Content from './content';
import NavBar from './nav-bar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	const { theme } = useSelector((state: RootState) => state.settings);
	useEffect(() => {
		if (theme === 'dark') document.body.classList.add('rs-theme-dark');
		else document.body.classList.remove('rs-theme-dark');
	}, [theme]);
	return (
		<React.Fragment>
			<Head>
				<title>halis yücel</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
				/>
				<meta name="description" content={t.meta.description} />
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/favicon.png" type={'image/png'} />
				<meta property="og:title" content={'Halis Yücel'} />
				<meta property="og:site_name" content={'Halis Yücel'} />
				<meta property="og:url" content={'https://halisyucel.dev/'} />
				<meta property="og:description" content={t.meta.description} />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="app" />
				<meta name="twitter:title" content={'Halis Yücel'} />
				<meta name="twitter:description" content={t.meta.description} />
			</Head>
			<NavBar />
			<Content>{children}</Content>
		</React.Fragment>
	);
};

export default Layout;
