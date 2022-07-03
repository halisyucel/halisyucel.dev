import React from 'react';

interface LabelProps {
	className?: string;
	value?: string;
	error?: string | false;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ className = '', value, children, error = false }) => {
	return (
		<label className={`block mb-2 last:mb-0 ${value ? '' : 'mt-4'} ${className}`}>
			{value && (
				<span className={'block text-black ml-0.5 mb-1 font-extrabold'}>{value}</span>
			)}
			{children}
			{error && <span className={'ml-0.5 text-xs text-red-500'}>{error}</span>}
		</label>
	);
};

export default Label;
