import { useEffect, useState } from 'react';

export default (id: string) => {
	const [recaptcha, setRecaptcha] = useState<number>();
	const renderRECAPTCHA = () => {
		const timer = setTimeout(() => {
			const recaptchaElement = grecaptcha.render(
				id,
				{ sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY }
			);
			setRecaptcha(recaptchaElement);
		}, 1000);
		return () => clearTimeout(timer);
	};
	useEffect(() => renderRECAPTCHA(), []);
	return recaptcha;
};
