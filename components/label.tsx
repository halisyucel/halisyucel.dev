import React from 'react';

interface LabelProps {
	className?: string;
	error?: string | false;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ className = '', children, error = false }) => {
	return (
		<label className={`mt-4 mb-2 block last:mb-0 ${className}`}>
			{children}
			{error && <span className={'ml-0.5 text-xs text-red-500'}>{error}</span>}
		</label>
	);
};

export default Label;
