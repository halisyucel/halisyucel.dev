import React from 'react';

const Loading: React.FC = () => {
	return (
		<div className={'inline-block relative w-4 h-4'}>
			{[1, 2, 3, 4].map((i) => (
				<div
					key={i}
					className={
						'animate-loading block box-border absolute w-4 h-4 border-4 rounded-full border-loading'
					}
					style={
						i !== 4
							? {
									animationDelay: {
										'1': '-0.45s',
										'2': '-0.3s',
										'3': '-0.15s',
									}[i.toString()],
							  }
							: {}
					}
				/>
			))}
		</div>
	);
};

export default Loading;
