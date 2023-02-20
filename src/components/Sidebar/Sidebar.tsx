import { ActionIcon, Divider, Flex, Stack } from '@mantine/core';
import {
  IconBrandGithubCopilot,
  IconBrandGraphql,
  IconFolder,
  IconGitCommit,
  IconList,
  IconTerminal2,
} from '@tabler/icons-react';
import Link from 'next/link';
import { lazy, Suspense, useCallback, useState } from 'react';

type NavItem = 'folders' | 'commits' | 'copilot' | 'todos';

const Folders = lazy(() => import('@/components/Folders'));
const Commits = lazy(() => import('@/components/Commits'));
const Copilot = lazy(() => import('@/components/Copilot'));
const Todos = lazy(() => import('@/components/Todos'));

const navItems: { key: NavItem; icon: JSX.Element }[] = [
  {
    key: 'folders',
    icon: <IconFolder size={16} />,
  },
  {
    key: 'commits',
    icon: <IconGitCommit size={16} />,
  },
  {
    key: 'copilot',
    icon: <IconBrandGithubCopilot size={16} />,
  },
  {
    key: 'todos',
    icon: <IconList size={16} />,
  },
];

export default function Sidebar(): JSX.Element {
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('folders');

  const renderNavItem = useCallback(() => {
    switch (activeNavItem) {
      case 'folders':
        return <Folders />;
      case 'commits':
        return <Commits />;
      case 'copilot':
        return <Copilot />;
      case 'todos':
        return <Todos />;
    }
  }, [activeNavItem]);

  return (
    <Flex className="full-height-without-header" gap="xs">
      <Stack
        spacing="xs"
        justify="space-between"
        className="bg-neutral-800 p-2.5 rounded-md"
      >
        <Stack spacing="xs">
          {navItems.map((item) => (
            <ActionIcon
              key={item.key}
              variant={item.key === activeNavItem ? 'light' : 'filled'}
              color={item.key === activeNavItem ? 'teal' : 'dark'}
              onClick={() => setActiveNavItem(item.key)}
            >
              {item.icon}
            </ActionIcon>
          ))}
        </Stack>
        <Stack spacing="xs">
          <Divider />
          <ActionIcon
            variant="filled"
            color="dark"
            component={Link}
            href="/terminal"
          >
            <IconTerminal2 size={16} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            color="dark"
            component={Link}
            href="/schema"
          >
            <IconBrandGraphql size={16} stroke={1.5} />
          </ActionIcon>
        </Stack>
      </Stack>
      <Stack spacing={0} className="bg-neutral-800 p-2.5 rounded-md w-[280px]">
        <Suspense fallback={null}>{renderNavItem()}</Suspense>
      </Stack>
    </Flex>
  );
}
