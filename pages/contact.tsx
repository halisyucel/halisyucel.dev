import Command from '../components/command';
import Label from '../components/label';
import Layout from '../components/layout';
import MailBox from '../components/mail-box';
import Title from '../components/title';
import { createErrorText, ContactFormSchema } from '../utils/contact';
import textsWithLocales, { Locale } from '../utils/texts-with-locales';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Input, Message } from 'rsuite';
import { TypeAttributes } from 'rsuite/esm/@types/common';

interface ResultProps {
	type: TypeAttributes.Status | undefined;
	message: string | undefined;
	isVisible: boolean;
}

const Contact: NextPage = () => {
	const { locale } = useRouter();
	const texts = textsWithLocales(locale as Locale);
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [errors, setErrors] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [token, setToken] = useState<string>('');
	const nameError = useMemo(() => createErrorText('name', errors, texts), [errors, texts]);
	const emailError = useMemo(() => createErrorText('email', errors, texts), [errors, texts]);
	const messageError = useMemo(() => createErrorText('message', errors, texts), [errors, texts]);
	const tokenError = useMemo(() => createErrorText('token', errors, texts), [errors, texts]);
	const [resultProps, setResultProps] = useState<ResultProps>({
		type: undefined,
		message: undefined,
		isVisible: false,
	});
	const clearForm = useCallback(() => {
		setName('');
		setEmail('');
		setMessage('');
		setToken('');
		recaptchaRef.current?.reset();
	}, [recaptchaRef]);
	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			setIsLoading(true);

			const { error, value } = ContactFormSchema.validate(
				{ name, email, message, token },
				{ abortEarly: false },
			);
			if (error) {
				setIsLoading(false);
				setErrors(error.details);
				return;
			}

			setErrors([]);
			setResultProps({
				type: undefined,
				message: undefined,
				isVisible: false,
			});

			axios
				.post('/api/sendMail/', value)
				.then(() => {
					clearForm();
					setResultProps({
						type: 'success',
						message: texts.pages.contact.result.success,
						isVisible: true,
					});
				})
				.catch(() => {
					setResultProps({
						type: 'error',
						message: texts.pages.contact.result.error,
						isVisible: true,
					});
				})
				.finally(() => {
					setIsLoading(false);
					setTimeout(() => {
						const contentElement = document.getElementById('content') as HTMLDivElement;
						contentElement.scrollTo({
							top: contentElement.scrollHeight,
							behavior: 'smooth',
						});
					}, 100);
				});
		},
		[name, email, message, token, texts, clearForm],
	);
	return (
		<Layout>
			<Title value={texts.pages.contact.title} />
			<Command className={'mt-2'} location={'~/contact'} />
			<p className={'text-lg font-source-sans pb-4 mb-4 font-light border-b-2 border-gray'}>
				{texts.pages.contact.text.part_1}
				<MailBox value={process.env.NEXT_PUBLIC_EMAIL as string} />
				{texts.pages.contact.text.part_2}
			</p>
			<form className={'w-[min(100%,400px)]'} onSubmit={handleSubmit}>
				<div className={'mb-4'}>
					<Label value={texts.pages.contact.labels.name} error={nameError}>
						<Input
							name={'name'}
							spellCheck={false}
							autoComplete={'off'}
							maxLength={50}
							value={name}
							onChange={(value) => setName(value)}
						/>
					</Label>
					<Label value={texts.pages.contact.labels.email} error={emailError}>
						<Input
							name={'email'}
							spellCheck={false}
							autoComplete={'off'}
							value={email}
							onChange={(value) => setEmail(value)}
						/>
					</Label>
					<Label value={texts.pages.contact.labels.message} error={messageError}>
						<Input
							as={'textarea'}
							name={'message'}
							spellCheck={false}
							autoComplete={'off'}
							rows={4}
							value={message}
							onChange={(value) => setMessage(value)}
						/>
					</Label>
					<Label error={tokenError}>
						<ReCAPTCHA
							ref={recaptchaRef}
							size={'normal'}
							sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
							onChange={(value) => setToken(value as string)}
							lang={locale}
						/>
					</Label>
				</div>
				<div className={'flex mb-4'}>
					<Button
						size={'sm'}
						type={'submit'}
						appearance={'primary'}
						className={'mr-4'}
						loading={isLoading}
					>
						{texts.pages.contact.labels.send}
					</Button>
				</div>
				{resultProps.isVisible && (
					<Message showIcon={true} type={resultProps.type} className={'mb-4'}>
						{resultProps.message}
					</Message>
				)}
			</form>
		</Layout>
	);
};

export default Contact;
