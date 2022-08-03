import ReturnBack from '../components/return-back';
import NotFound from '../public/not-found.json';
import texts, { Locale } from '../utils/texts';
import Lottie from 'lottie-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Helmet } from 'react-helmet';

const Error404: NextPage = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<div className={'w-full h-full flex flex-col justify-center items-center'}>
			<Helmet>
				<title>halis yücel</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
				/>
				<meta name="robots" content="noindex, nofollow" />
				<link rel="icon" href="/favicon.png" type={'image/png'} />
			</Helmet>
			<Lottie
				style={{
					width: 'min(20rem, 100%)',
				}}
				animationData={NotFound}
			/>
			<span className={'font-source-sans font-extrabold text-2xl text-center mb-8'}>
				{t.pages.notFound}
			</span>
			<ReturnBack />
		</div>
	);
};

export default Error404;
