import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCopy, BiMailSend } from 'react-icons/bi';
import { IconButton } from 'rsuite';

interface MailBoxProps {
	value: string;
}

const MailBox: React.FC<MailBoxProps> = ({ value }) => {
	const router = useRouter();
	const [hover, setHover] = useState<boolean>(false);
	return (
		<span
			className={'relative cursor-pointer font-extrabold'}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{value}&nbsp;
			<span
				className={`${
					hover ? 'inline' : 'hidden'
				} absolute bottom-[-36px] left-[calc(50%-34px)] rounded-lg bg-bg-primary p-1`}
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
