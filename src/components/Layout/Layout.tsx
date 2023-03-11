import { Group, Stack } from '@mantine/core';
import type { ReactNode } from 'react';
import { lazy, Suspense } from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Iframe = lazy(() => import('@/components/Iframe'));

export interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Stack spacing="xs" className="m-2.5">
      <Header />
      <Group spacing="xs" position="apart">
        <Sidebar />
        {children}
        <Suspense fallback={null}>
          <Iframe />
        </Suspense>
      </Group>
    </Stack>
  );
}
