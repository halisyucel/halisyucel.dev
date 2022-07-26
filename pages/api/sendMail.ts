import { ContactFormSchema } from '../../utils/contact';
import sgMail from '@sendgrid/mail';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { error, value } = ContactFormSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.message });
	const response = await axios({
		url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${value.token}`,
		method: 'POST',
	});
	if (!response.data.success) return res.status(401).json({ message: 'invalid token' });
	await sgMail.send({
		to: process.env.NEXT_PUBLIC_EMAIL,
		from: {
			email: 'info@halisyucel.me',
			name: 'halisyucel.me',
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
};
