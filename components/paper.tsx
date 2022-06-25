import React from 'react';

interface PaperProps {
	children: React.ReactNode;
	className?: string;
}

const Paper: React.FC<PaperProps> = ({ children, className='' }) => {
	return (
		<div className={`bg-bg-secondary p-5 rounded-2xl ${className}`}>
			{children}
		</div>
	);
};

export default Paper;
