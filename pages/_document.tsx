import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html>
			<Head />
			<body className={'min-h-[100vh] h-[100vh] p-10'}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
