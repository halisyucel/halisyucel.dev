import React from 'react';

interface CommandProps {
	className?: string;
	location?: string;
	command?: string;
}

const Command: React.FC<CommandProps> = ({ className = '', location = '~', command = '' }) => {
	return (
		<p className={`font-mono text-sm text-black ${className}`}>
			<span className={'text-green-600'}>halisyucel@halisyucel</span>
			<span className={'text-blue-600'}>{location}</span>${command}
		</p>
	);
};

export default Command;
