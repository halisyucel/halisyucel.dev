import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavLink {
	href: string;
	label: string;
}

const NavLink: React.FC<NavLink> = ({ href, label }) => {
	const router = useRouter();
	return (
		<Link href={href}>
			<a
				className={`text-xl h-7 font-extrabold last:mr-0 mr-6${
					router.pathname === href ? ' text-gradient' : ''
				}`}
			>
				{label}
			</a>
		</Link>
	);
};

export default NavLink;
