import { Stack } from '@mantine/core';

import NavLink from '@/components/Folders/components/NavLink';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Quotes',
    href: '/quotes',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavLinks(): JSX.Element {
  return (
    <Stack spacing={0}>
      {links.map(({ name, href }) => (
        <NavLink key={`nav-link-${name}`} name={name} href={href} />
      ))}
    </Stack>
  );
}
