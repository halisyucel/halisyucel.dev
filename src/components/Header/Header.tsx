import { Flex, Group } from '@mantine/core';

import FileActions from '@/components/FileActions';
import GitBranch from '@/components/GitBranch';
import Projects from '@/components/Projects';
import WindowButtons from '@/components/WindowButtons';

export default function Header(): JSX.Element {
  return (
    <Group position="apart" className="bg-neutral-800 p-2.5 rounded-md">
      <Flex gap="xs">
        <WindowButtons />
        <Projects />
        <GitBranch />
      </Flex>
      <FileActions />
    </Group>
  );
}
