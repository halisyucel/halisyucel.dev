import Button from '../components/button';
import Divider from '../components/divider';
import Input from '../components/input';
import Layout from '../components/layout';
import { NextPage } from 'next';
import React from 'react';

const Contact: NextPage = () => {
	return (
		<Layout>
			<h1 className={'text-5xl font-title font-extrabold text-gradient w-fit mb-8'}>
				Contact me
			</h1>
			<p className={'font-text font-light text-xl'}>
				You can send an e-mail to &nbsp;
				<a
					className={'text-gradient font-extrabold'}
					href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
				>
					{process.env.NEXT_PUBLIC_EMAIL}
				</a>
				&nbsp;or fill out the form below to contact me.
			</p>
			<Divider />
			<Input type={'text'} className={'mb-6'} label={'Name'} placeholder={'Your name'} />
			<form>
				<Input
					type={'text'}
					className={'mb-6'}
					label={'Email'}
					placeholder={'Your email'}
				/>
				<Input type={'textarea'} label={'Message'} placeholder={'Your message'} />
				<Button type={'submit'} loading={false}>
					Send
				</Button>
			</form>
		</Layout>
	);
};

export default Contact;
