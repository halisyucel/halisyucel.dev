import React from 'react';
import { NextPage } from 'next';
import Lottie from 'lottie-react';
import NotFound from '../public/not-found.json';
import ReturnBack from '../components/return-back';
import useTexts from '../hooks/useTexts';

const Error404: NextPage = () => {
	const texts = useTexts();
	return (
		<div className={'w-full h-full flex flex-col justify-center items-center'}>
			<Lottie
				style={{
					width: 'min(20rem, 100%)',
				}}
				animationData={NotFound}
			/>
			<span
				className={'font-title font-extrabold text-2xl text-center mb-8'}
			>
				{texts.pages.notFound}
			</span>
			<ReturnBack />
		</div>
	);
};

export default Error404;
