import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { Button } from 'rsuite';

const ToggleLang = () => {
	const router = useRouter();
	return (
		<Link href={router.asPath} locale={router.locale === 'en' ? 'tr' : 'en'}>
			<Button size={'xs'} className={'group'}>
				<span
					className={
						'flex items-center justify-center font-extrabold group-hover:text-green-600'
					}
				>
					<BiWorld className={'mr-1'} />
					{router.locale === 'en' ? 'TR' : 'EN'}
				</span>
			</Button>
		</Link>
	);
};

export default ToggleLang;
