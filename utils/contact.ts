import Joi from 'joi';

export const ContactFormSchema = Joi.object({
	name: Joi.string().required().min(2).max(50),
	email: Joi.string()
		.required()
		.email({ tlds: { allow: false } }),
	message: Joi.string().required().min(2),
	token: Joi.string().required(),
});

export const createErrorText: (
	name: string,
	errors: any[],
	texts: { [key: string]: any },
) => string | false = (name, errors, texts) => {
	const error = errors.find((error) => error.context.key === name);
	if (error) return texts.pages.contact.errors?.[name]?.[error.type] || error.message;
	return false;
};
