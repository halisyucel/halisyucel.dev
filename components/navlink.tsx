import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLink {
	href: string;
	label: string;
}

const NavLink: React.FC<NavLink> = ({ href, label }) => {
	const router = useRouter();
	return (
		<Link href={href}>
			<a
				className={`text-xl font-title h-7 font-extrabold mr-6${
					router.pathname === href ? ' text-gradient' : ''
				}`}
			>
				{label}
			</a>
		</Link>
	);
};

export default NavLink;
