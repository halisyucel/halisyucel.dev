import Command from '../components/command';
import Label from '../components/label';
import Layout from '../components/layout';
import MailBox from '../components/mail-box';
import Title from '../components/title';
import { createErrorText, ContactFormSchema } from '../utils/contact';
import texts, { Locale } from '../utils/texts';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet';
import { Button, Input, Message } from 'rsuite';
import { TypeAttributes } from 'rsuite/esm/@types/common';

interface ResultProps {
	type: TypeAttributes.Status | undefined;
	message: string | undefined;
	isVisible: boolean;
}

const Contact: NextPage = () => {
	const { locale } = useRouter();
	const t = texts(locale as Locale);
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [errors, setErrors] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [token, setToken] = useState<string>('');
	const nameError = useMemo(() => createErrorText('name', errors, t), [errors, t]);
	const emailError = useMemo(() => createErrorText('email', errors, t), [errors, t]);
	const messageError = useMemo(() => createErrorText('message', errors, t), [errors, t]);
	const tokenError = useMemo(() => createErrorText('token', errors, t), [errors, t]);
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
						message: t.pages.contact.result.success,
						isVisible: true,
					});
				})
				.catch(() => {
					setResultProps({
						type: 'error',
						message: t.pages.contact.result.error,
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
		[name, email, message, token, t, clearForm],
	);
	return (
		<Layout>
			<Helmet>
				<title>halis yücel | {t.pages.contact.headTitle}</title>
			</Helmet>
			<Title value={t.pages.contact.title} />
			<Command className={'mt-2'} location={'~/contact'} />
			<p className={'text-lg font-source-sans pb-4 mb-4 font-light border-b-2 border-gray flex flex-wrap'}>
				{t.pages.contact.text.part_1}&nbsp;
				<MailBox value={process.env.NEXT_PUBLIC_EMAIL as string} />
				{t.pages.contact.text.part_2}
			</p>
			<form className={'w-full max-w-[320px]'} onSubmit={handleSubmit}>
				<div className={'mb-4'}>
					<Label error={nameError}>
						<Input
							placeholder={t.pages.contact.labels.name}
							name={'name'}
							spellCheck={false}
							autoComplete={'off'}
							maxLength={50}
							value={name}
							onChange={(value) => setName(value)}
						/>
					</Label>
					<Label error={emailError}>
						<Input
							placeholder={t.pages.contact.labels.email}
							name={'email'}
							spellCheck={false}
							autoComplete={'off'}
							value={email}
							onChange={(value) => setEmail(value)}
						/>
					</Label>
					<Label error={messageError}>
						<Input
							placeholder={t.pages.contact.labels.message}
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
						{t.pages.contact.labels.send}
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
