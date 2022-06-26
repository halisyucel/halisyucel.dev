import React from 'react';
import { Button } from 'rsuite';

const ReturnBack = () => {
	return (
		<Button size={'xs'} className={'mr-[10px]'}>
			<span style={{ fontFamily: 'monospace' }}>
				<span className={'text-green-600'}>halisyucel@halisyucel</span>
				<span className={'text-blue-600'}>~</span>$ cd ..
			</span>
		</Button>
	);
};

export default ReturnBack;
