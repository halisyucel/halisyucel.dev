import React, { useRef, useState, useMemo } from 'react';

interface Input {
	type: 'text' | 'textarea';
	className?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	error?: string | null;
	value?: string;
	onChange?: (value: string) => void;
}

const inputClasses: string[] = [
	'w-full',
	'px-5',
	'py-2',
	'bg-black',
	'border-4',
	'rounded-lg',
	'resize-none',
	'focus:outline-none',
	'focus:shadow-white',
	'transition-all',
];
const labelClasses: string[] = [
	'transition-all',
	'absolute',
	'bg-black',
	'w-min',
	'h-min',
	'inline-flex',
];
const labelOpenClasses: string[] = ['top-[-0.6rem]', 'left-4', 'text-sm', 'px-2'];
const labelCloseClasses: string[] = ['mx-6', 'my-3', 'inset-0', 'cursor-text'];

const Input: React.FC<Input> = ({
									type,
									name,
									className = '',
									placeholder = '',
									label,
									error,
									value,
									onChange,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
	const labelIsOpen: boolean = useMemo(() => {
		const input = inputRef.current as HTMLInputElement;
		if (input && input.value.length > 0) return true;
		return inputIsFocused;
	}, [inputIsFocused, inputRef]);
	const inputProps: any = useMemo(() => {
		return {
			ref: inputRef,
			className: [...inputClasses, error ? 'border-red' : 'border-lightblue'].join(' '),
			spellCheck: false,
			autoComplete: 'off',
			placeholder: labelIsOpen ? placeholder : '',
			name: name,
			value: value,
			onChange: onChange,
			onFocus: () => setInputIsFocused(true),
			onBlur: () => setInputIsFocused(false),
		};
	}, [inputRef, labelIsOpen, placeholder, error, name]);
	return (
		<div
			className={[
				'font-light',
				'font-text',
				'text-md',
				'relative',
				'w-full',
				...className?.split(' '),
			].join(' ')}
		>
			{type === 'text' ? (
				<input type={'text'} {...inputProps} />
			) : (
				<textarea rows={'5'} {...inputProps} />
			)}
			{label !== null && (
				<span
					onClick={() => inputRef.current?.focus()}
					className={[
						...labelClasses,
						...(labelIsOpen ? labelOpenClasses : labelCloseClasses),
						error ? 'text-red' : 'text-lightblue',
					].join(' ')}
				>
					{label}
				</span>
			)}
			{error !== null && (
				<span className={'mt-1 inline-flex px-6 text-xs text-red font-extrabold'}>
					{error}
				</span>
			)}
		</div>
	);
};

export default Input;
