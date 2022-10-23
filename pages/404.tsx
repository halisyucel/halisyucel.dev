import Lottie from 'lottie-react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import ReturnBack from '../components/return-back';
import NotFound from '../public/not-found.json';
import texts, { Locale } from '../utils/texts';

const Error404: NextPage = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<div className={'flex h-full w-full flex-col items-center justify-center'}>
			<Head>
				<title>halis yücel</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
				/>
				<meta name="robots" content="noindex, nofollow" />
				<link rel="icon" href="/favicon.png" type={'image/png'} />
			</Head>
			<Lottie
				style={{
					width: 'min(20rem, 100%)',
				}}
				animationData={NotFound}
			/>
			<span className={'mb-8 text-center font-source-sans text-2xl font-extrabold'}>
				{t.pages.notFound}
			</span>
			<ReturnBack />
		</div>
	);
};

export default Error404;
