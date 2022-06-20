import React from 'react';

interface ReCAPTCHAWrapper {
	children: React.ReactNode,
	error?: string | null
}

const ReCAPTCHAWrapper: React.FC<ReCAPTCHAWrapper> = ({ children, error=null }) => {
	return (
		<div>
			{children}
			{error !== null && (
				<span className={'mt-1 inline-flex px-7 text-xs text-red font-extrabold'}>
					{error}
				</span>
			)}
		</div>
	);
};

export default ReCAPTCHAWrapper;
