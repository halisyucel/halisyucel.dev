import React, { useRef, useState, useCallback, useMemo, ChangeEvent } from 'react';

interface Input {
	type: 'text' | 'textarea';
	className?: string;
	label?: string | null;
	placeholder?: string;
	error?: boolean;
	value?: string | null;
	onChange?: (value: string) => void | null;
	props?: any[];
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
	props,
	className = '',
	label = null,
	error = false,
	placeholder = '',
	value = null,
	onChange = null,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState<string>('');
	const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
	const realValue = useMemo(() => {
		if (value !== null) {
			return value;
		}
		return inputValue;
	}, [value, inputValue]);
	const realHandleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (onChange !== null) {
				onChange(e.target.value);
			}
			setInputValue(e.target.value);
		},
		[onChange],
	);
	const labelIsOpen: boolean = useMemo(() => {
		if (realValue.length > 0) return true;
		return inputIsFocused;
	}, [inputIsFocused, realValue]);
	const inputProps: any = useMemo(() => {
		return {
			ref: inputRef,
			className: [...inputClasses, error ? 'border-red' : 'border-lightblue'].join(' '),
			spellCheck: false,
			placeholder: labelIsOpen ? placeholder : '',
			value: realValue,
			onChange: realHandleChange,
			onFocus: () => setInputIsFocused(true),
			onBlur: () => setInputIsFocused(false),
			...props,
		};
	}, [inputRef, realValue, realHandleChange, labelIsOpen, placeholder, error, props]);
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
		</div>
	);
};

export default Input;
