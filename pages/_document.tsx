import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html>
			<Head />
			<body className={'h-[100vh] min-h-[100vh] p-10 md:p-4'}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
