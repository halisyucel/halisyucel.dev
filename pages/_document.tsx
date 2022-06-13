import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang={'tr'}>
				<Head />
				<body className={'bg-black text-white mt-20 pt-20 flex justify-center items-start'}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
