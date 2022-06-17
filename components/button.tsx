import Loading from './loading';
import React from 'react';

interface Button {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	props?: any;
	loading?: boolean;
}

const Button: React.FC<Button> = ({
	children,
	type = 'button',
	className = '',
	loading = false,
	props,
}) => {
	return (
		<button
			type={type}
			className={[
				'relative',
				'border-lightblue',
				'border-4',
				'py-1.5',
				'font-extrabold',
				'transition-all',
				'text-white',
				'text-input',
				'px-4',
				'my-4',
				'rounded-lg',
				'focus:shadow-white',
				'focus:outline-none',
				...className.split(' '),
			].join(' ')}
			{...props}
		>
			<span
				className={[
					'absolute',
					'inset-0',
					'w-full',
					'h-full',
					'flex',
					'justify-center',
					'items-center',
					loading ? 'inline' : 'hidden',
				].join(' ')}
			>
				<Loading />
			</span>
			<span
				className={['inline-block', 'px-2', loading ? 'opacity-0' : 'opacity-100'].join(
					' ',
				)}
			>
				{children}
			</span>
		</button>
	);
};

export default Button;
