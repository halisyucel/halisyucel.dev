import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiMailSend } from 'react-icons/bi';
import { BiCopy } from 'react-icons/bi';
import { IconButton } from 'rsuite';

interface MailBoxProps {
	value: string;
}

const MailBox: React.FC<MailBoxProps> = ({ value }) => {
	const router = useRouter();
	const [hover, setHover] = useState<boolean>(false);
	return (
		<span
			className={'relative font-extrabold cursor-pointer'}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			&nbsp;{value}&nbsp;
			<span
				className={`${
					hover ? 'inline' : 'hidden'
				} absolute bottom-[-36px] left-[calc(50%-34px)] p-1 bg-bg-primary rounded-lg`}
			>
				<IconButton
					size={'sm'}
					icon={<BiMailSend />}
					className={'mr-1'}
					onClick={async () => {
						await router.push(`mailto:${value}`);
					}}
				/>
				<CopyToClipboard text={value}>
					<IconButton size={'sm'} icon={<BiCopy />} />
				</CopyToClipboard>
			</span>
		</span>
	);
};

export default MailBox;
