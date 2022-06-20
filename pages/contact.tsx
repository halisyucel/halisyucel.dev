import Button from '../components/button';
import Divider from '../components/divider';
import Input from '../components/input';
import Layout from '../components/layout';
import { NextPage } from 'next';
import React, { useCallback, FormEvent, useState, useRef } from 'react';
import { ContactFormSchema } from '../lib/contact';
import ReCAPTCHAWrapper from '../components/recaptcha-wrapper';
import axios from 'axios';
import Message from '../components/message';
import useRecaptcha from '../hooks/useRecaptcha';

interface Errors {
	name: string | null;
	email: string | null;
	message: string | null;
	recaptcha: string | null;
}

interface FormElements extends HTMLFormControlsCollection {
	name: HTMLInputElement;
	email: HTMLInputElement;
	message: HTMLInputElement;
	'g-recaptcha-response': HTMLInputElement;
}

const DefaultErrors: Errors = {
	name: null,
	email: null,
	message: null,
	recaptcha: null
};

const Contact: NextPage = () => {
	const recaptcha = useRecaptcha('contact_recaptcha');
	const formRef = useRef<HTMLFormElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<Errors>({ ...DefaultErrors });
	const [successMessageVisible, setSuccessMessageVisible] = useState<boolean>(false);
	const [errorMessageVisible, setErrorMessageVisible] = useState<boolean>(false);
	const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		setSuccessMessageVisible(false);
		setErrorMessageVisible(false);
		const updatedErrors: Errors = { ...DefaultErrors };
		const elements = formRef.current?.elements as FormElements;
		const { error, value } = ContactFormSchema.validate(
			{
				name: elements.name.value,
				email: elements.email.value,
				message: elements.message.value,
				recaptcha: elements['g-recaptcha-response'].value
			},
			{
				abortEarly: false
			}
		);
		if (error) {
			for (const errorDetail of error.details) {
				if (updatedErrors.hasOwnProperty(errorDetail.context?.key as string))
					(updatedErrors as any)[errorDetail.context?.key as string] = errorDetail.message;
			}
			setIsLoading(false);
			setErrors(updatedErrors);
			return;
		}
		setErrors({ ...DefaultErrors });
		axios({
			method: 'POST',
			url: '/api/mail',
			data: value
		})
			.then(() => {
				formRef.current?.reset()
				grecaptcha.reset(recaptcha);
				setSuccessMessageVisible(true);
			})
			.catch(() => {
				setErrorMessageVisible(true);
			})
			.finally(() => {
				setIsLoading(false);
			})
	}, [
		errors,
		formRef,
		recaptcha
	]);
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
			<form ref={formRef} onSubmit={handleSubmit}>
				<Input
					type={'text'}
					className={'mb-6'}
					name={'name'}
					label={'Name'}
					placeholder={'Your name'}
					error={errors.name}
				/>
				<Input
					type={'text'}
					className={'mb-6'}
					name={'email'}
					label={'Email'}
					placeholder={'Your email'}
					error={errors.email}
				/>
				<Input
					type={'textarea'}
					className={'mb-6'}
					name={'message'}
					label={'Message'}
					placeholder={'Your message'}
					error={errors.message}
				/>
				<ReCAPTCHAWrapper error={errors.recaptcha}>
					<div id={'contact_recaptcha'} />
				</ReCAPTCHAWrapper>
				<Button
					type={'submit'}
					className={'mt-6'}
					loading={isLoading}
				>
					Send
				</Button>
				<Message visible={successMessageVisible} type={'success'} className={'mt-6'}>
					Your message has been sent. I will get back to you as soon as possible.
				</Message>
				<Message visible={errorMessageVisible} type={'error'} className={'mt-6'}>
					Oops! An error occurred. Please try again later.
				</Message>
			</form>
		</Layout>
	);
};

export default Contact;
