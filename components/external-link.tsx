import Link from 'next/link';
import React from 'react';

interface ExternalLink {
	href: string;
	icon: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLink> = ({ href, icon }) => {
	return (
		<Link href={href}>
			<a target={'_blank'} rel={'noopener noreferrer'} className={'text-3xl mr-4 last:mr-0'}>
				{icon}
			</a>
		</Link>
	);
};

export default ExternalLink;
