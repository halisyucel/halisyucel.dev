import Link from 'next/link';
import React from 'react';

interface ExternalLink {
	href: string;
	icon: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLink> = ({ href, icon }) => {
	return (
		<Link href={href}>
			<a
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={`w-12 h-12 flex justify-center items-center rounded-xl bg-white text-black text-3xl mr-8 last:mr-0`}
			>
				{icon}
			</a>
		</Link>
	);
};

export default ExternalLink;
