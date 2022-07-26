import ReturnBack from '../components/return-back';
import textsWithLocales, { Locale } from '../utils/texts-with-locales';
import NotFound from '../public/not-found.json';
import Lottie from 'lottie-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Error404: NextPage = () => {
	const { locale } = useRouter();
	const texts = textsWithLocales(locale as Locale);
	return (
		<div className={'w-full h-full flex flex-col justify-center items-center'}>
			<Lottie
				style={{
					width: 'min(20rem, 100%)',
				}}
				animationData={NotFound}
			/>
			<span className={'font-source-sans font-extrabold text-2xl text-center mb-8'}>
				{texts.pages.notFound}
			</span>
			<ReturnBack />
		</div>
	);
};

export default Error404;
