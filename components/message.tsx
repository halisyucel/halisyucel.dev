import React from 'react';

interface Message {
	type: 'success' | 'error';
	children: React.ReactNode;
	className?: string;
	visible?: boolean;
}

const Message: React.FC<Message> = ({ type, children, className = '', visible = true }) => {
	return visible ? (
		<div
			className={[
				'border-4',
				'rounded-lg',
				'border-white',
				'px-6',
				'py-4',
				'text-left',
				'font-text',
				'font-extrabold',
				type === 'success' ? 'bg-green' : 'bg-red',
				...className?.split(' '),
			].join(' ')}
		>
			{children}
		</div>
	) : null;
};

export default Message;
