import React from 'react';
import { Button } from 'rsuite';

interface ReturnBackProps {
	className?: string;
}

// TODO burayı her linke uyan şekilde yap

const ReturnBack: React.FC<ReturnBackProps> = ({ className = '' }) => {
	return (
		<Button size={'xs'} className={className}>
			<span className={'font-mono'}>cd ..</span>
		</Button>
	);
};

export default ReturnBack;
