import Joi from 'joi';

export const ContactFormSchema = Joi.object({
	name: Joi.string()
		.required()
		.min(2)
		.max(50),
	email: Joi.string()
		.required()
		.email({ tlds: { allow: false } }),
	message: Joi.string()
		.required()
		.min(2),
	recaptcha: Joi.string()
		.required()
		.messages({
			'string.empty': 'please verify the recaptcha!',
		})
});