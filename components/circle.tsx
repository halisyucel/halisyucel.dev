import React from 'react';

const Circle = () => {
	return (
		<div
			className={
				'h-44 w-44 min-w-max min-h-max bg-white rounded-full flex justify-center items-center gradient'
			}
		>
			<div
				style={{ backgroundImage: 'url(/pp.jpeg)' }}
				className={
					'h-40 w-40 border-8 border-black bg-no-repeat bg-cover bg-center rounded-full'
				}
			/>
		</div>
	);
};

export default Circle;
