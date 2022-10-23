import React from 'react';

interface PaperProps {
	children: React.ReactNode;
	className?: string;
}

const Paper: React.FC<PaperProps> = ({ children, className = '' }) => {
	return <div className={`rounded-2xl bg-bg-secondary p-5 ${className}`}>{children}</div>;
};

export default Paper;
