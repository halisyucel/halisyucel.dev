import Input from '../components/input';
import Layout from '../components/layout';
import { NextPage } from 'next';
import React from 'react';
import Divider from '../components/divider';

const Contact: NextPage = () => {
	return (
		<Layout>
			<h1 className={'text-5xl font-title font-extrabold text-gradient w-fit'}>Contact me</h1>
			<p>
				naber lan
			</p>
			<Divider />
			<Input
				type={'text'}
				className={'mb-6'}
				label={'Name'}
				placeholder={'Your name'}
			/>
			<Input
				type={'text'}
				className={'mb-6'}
				label={'Email'}
				placeholder={'Your email'}
			/>
			<Input
				type={'textarea'}
				label={'Message'}
				placeholder={'Your message'}
			/>
		</Layout>
	);
};

export default Contact;
