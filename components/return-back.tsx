import { routesToBack } from '../utils/helper';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'rsuite';

interface ReturnBackProps {
	className?: string;
}

const ReturnBack: React.FC<ReturnBackProps> = ({ className = '' }) => {
	const router = useRouter();
	const [back, setBack] = useState<string | null>(null);
	const [isShake, setIsShake] = useState<boolean>(false);
	const handleClick = useCallback(() => {
		if (back) {
			console.log('back', back);
			router.push(back);
		} else {
			setIsShake(true);
			const timeout = setTimeout(() => {
				setIsShake(false);
			}, 1000);
			return () => clearTimeout(timeout);
		}
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
