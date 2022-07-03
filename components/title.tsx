import React from 'react';

interface TitleProps {
	className?: string;
	value: string;
}

const Title: React.FC<TitleProps> = ({ className = '', value }) => {
	return (
		<h1 className={`mt-6 font-source-sans font-extrabold text-black text-4xl ${className}`}>
			{value}
		</h1>
	);
};

export default Title;
