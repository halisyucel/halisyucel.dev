import React from 'react';
import { Button } from 'rsuite';

interface ReturnBackProps {
	className?: string;
}

const ReturnBack: React.FC<ReturnBackProps> = ({ className='' }) => {
	return (
		<Button size={'xs'} className={className}>
			<span style={{ fontFamily: 'monospace' }}>
				<span className={'text-green-600'}>halisyucel@halisyucel</span>
				<span className={'text-blue-600'}>~</span>$ cd ..
			</span>
		</Button>
	);
};

export default ReturnBack;
