import { routesToBack } from '../utils/helper';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'rsuite';

interface ReturnBackProps {
	className?: string;
}

// TODO 404 sayfasında hata veriyor

const ReturnBack: React.FC<ReturnBackProps> = ({ className = '' }) => {
	const router = useRouter();
	const [back, setBack] = useState<string | null>(null);
	const [isShake, setIsShake] = useState<boolean>(false);
	const handleClick = useCallback(() => {
		if (back === 'shake') {
			setIsShake(true);
			const timeout = setTimeout(() => {
				setIsShake(false);
			}, 1000);
			return () => clearTimeout(timeout);
		}
		if (back !== null) {
			router.push(back);
			return;
		}
		router.push('/');
	}, [router, back]);
	useEffect(() => {
		if (routesToBack.hasOwnProperty(router.pathname)) {
			setBack(routesToBack[router.pathname]);
			return;
		}
		setBack(null);
	}, [router]);
	return (
		<Button
			size={'xs'}
			className={`${className} ${isShake ? 'animate__animated animate__headShake' : ''}`}
			onClick={() => handleClick()}
		>
			<span className={'font-mono'}>cd ..</span>
		</Button>
	);
};

export default ReturnBack;
