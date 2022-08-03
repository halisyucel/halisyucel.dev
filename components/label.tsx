import React from 'react';

interface LabelProps {
	className?: string;
	error?: string | false;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ className = '', children, error = false }) => {
	return (
		<label className={`block mb-2 last:mb-0 'mt-4' ${className}`}>
			{children}
			{error && <span className={'ml-0.5 text-xs text-red-500'}>{error}</span>}
		</label>
	);
};

export default Label;
