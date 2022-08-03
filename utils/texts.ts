type Locale = 'tr' | 'en';

const texts: (locale: Locale) => { [key: string]: any } = (locale) =>
	({
		tr: {
			navigation: {
				about: 'hakkımda',
				blog: 'blog',
				projects: 'projeler',
				contact: 'iletişim',
			},
			pages: {
				notFound: 'aradığınız sayfa bulunamadı',
				contact: {
					title: 'benimle iletişime geçin',
					headTitle: 'iletişim',
					text: {
						part_1: 'bana ulaşmak isterseniz',
						part_2: 'adresini kullanabilir veya aşağıdaki formu doldurabilirsiniz',
					},
					labels: {
						name: 'Adınız',
						email: 'E-posta adresiniz',
						message: 'Mesajınız',
						send: 'Gönder',
						cancel: 'İptal',
					},
					result: {
						success: 'Mesajınız başarıyla gönderildi',
						error: 'Mesajınız gönderilemedi',
					},
					errors: {
						name: {
							'string.empty': 'adınızı boş bırakamazsınız',
							'string.min': 'adınız en az 2 karakterden oluşmalıdır',
							'string.max': 'adınız en fazla 50 karakterden oluşmalıdır',
						},
						email: {
							'string.empty': 'e-posta adresinizi boş bırakamazsınız',
							'string.email': 'e-posta adresiniz geçerli değil',
						},
						message: {
							'string.empty': 'mesajınızı boş bırakamazsınız',
							'string.min': 'mesajınız en az 2 karakterden oluşmalıdır',
						},
						token: {
							'string.empty': "lütfen reCAPTCHA'yı onaylayın",
						},
					},
				},
				blog: {
					headTitle: 'blog',
					article: {
						minRead: 'dakika okuma süresi',
					},
				},
				projects: {
					headTitle: 'projeler',
					title: 'projelerim',
					project: {
						writtenWith: 'ile yazıldı'
					}
				},
				about: {
					title: 'hakkımda',
					headTitle: 'hakkımda',
				}
			},
			recaptcha: {
				failed: 'reCAPTCHA doğrulaması başarısız oldu',
			},
		},
		en: {
			navigation: {
				about: 'about',
				blog: 'blog',
				projects: 'projects',
				contact: 'contact me',
			},
			pages: {
				notFound: 'page not found',
				contact: {
					title: 'contact me',
					headTitle: 'contact',
					text: {
						part_1: 'you can use',
						part_2: 'or fill out the form to contact me',
					},
					labels: {
						name: 'Name',
						email: 'E-mail',
						message: 'Message',
						send: 'Send',
						cancel: 'Cancel',
					},
					result: {
						success: 'Message sent successfully',
						error: 'Message could not be sent',
					},
					errors: {
						name: {
							'string.empty': 'name cannot be empty',
							'string.min': 'name must be at least 2 characters long',
							'string.max': 'name must be at most 50 characters long',
						},
						email: {
							'string.empty': 'email cannot be empty',
							'string.email': 'email is not valid',
						},
						message: {
							'string.empty': 'message cannot be empty',
							'string.min': 'message must be at least 2 characters long',
						},
						token: {
							'string.empty': 'please confirm reCAPTCHA',
						},
					},
				},
				blog: {
					headTitle: 'blog',
					article: {
						minRead: 'min read',
					},
				},
				projects: {
					title: 'my projects',
					headTitle: 'projects',
					project: {
						writtenWith: 'Written with'
					}
				},
				about: {
					title: 'about me',
					headTitle: 'about',
				}
			},
			recaptcha: {
				failed: 'reCAPTCHA validation failed',
			},
		},
	}[locale]);

export type { Locale };
export default texts;
