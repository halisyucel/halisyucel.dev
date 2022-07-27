import ReturnBack from '../components/return-back';
import NotFound from '../public/not-found.json';
import texts, { Locale } from '../utils/texts';
import Lottie from 'lottie-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Error404: NextPage = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	return (
		<div className={'w-full h-full flex flex-col justify-center items-center'}>
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
