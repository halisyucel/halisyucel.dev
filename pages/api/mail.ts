import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import { ContactFormSchema } from '../../lib/contact';
import axios from 'axios';

sgMail.setApiKey(process.env.SECRET_SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { error, value } = ContactFormSchema.validate(req.body);
	if (error)
		return res.status(400).json({ message: error.message });
	const response = await axios({
		url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_RECAPTCHA_API_KEY}&response=${value.recaptcha}`,
		method: 'POST'
	});
	if (!response.data.success)
		return res.status(401).json({ message: 'invalid token' });
	await sgMail.send({
		to: process.env.NEXT_PUBLIC_EMAIL,
		from: {
			email: 'info@halisyucel.me',
			name: 'halisyucel.me'
		},
		subject: 'Contact Form',
		html: `
			<h1>Contact Form</h1>
			<p><b>Name:</b> ${value.name}</p>
			<p><b>Email:</b> ${value.email}</p>
			<p><b>Message:</b> ${value.message}</p>
		`,
	});
	return res.status(200).json({ status: true });
}