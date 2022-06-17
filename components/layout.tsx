import Header from './header';
import Head from 'next/head';
import React from 'react';

interface Layout {
	children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Halis Yücel</title>
			</Head>
			<Header />
			<main className={'w-main'}>{children}</main>
		</React.Fragment>
	);
};

export default Layout;
