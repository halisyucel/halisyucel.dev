import { routesToNames } from '../utils/helper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'rsuite';

interface ReturnBackProps {
	className?: string;
}

const ReturnBack: React.FC<ReturnBackProps> = ({ className = '' }) => {
	const router = useRouter();
	const [back, setBack] = useState<string | null>(null);
	useEffect(() => {
		if (routesToNames.hasOwnProperty(router.pathname))
			if (router.pathname === '/blog/[page]') setBack('/blog');
		if (router.pathname === 'projects/[page]') setBack('/projects');
		else setBack('/');
	}, [router]);
	return (
		<Button
			size={'xs'}
			className={className}
			onClick={() => (back ? router.push(back) : router.push('/'))}
		>
			<span className={'font-mono'}>cd ..</span>
		</Button>
	);
};

export default ReturnBack;
