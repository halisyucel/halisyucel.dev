import { Button, Menu } from '@mantine/core';
import {
  IconBrandApple,
  IconBrandNextjs,
  IconBrandReact,
  IconHome,
  IconTable,
} from '@tabler/icons-react';

export default function Projects(): JSX.Element {
  return (
    <Menu position="bottom-start" offset={4} width={200} withArrow>
      <Menu.Target>
        <Button
          size="xs"
          variant="filled"
          color="dark"
          leftIcon={<IconTable size={16} />}
        >
          halisyucel.dev
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Open Project</Menu.Label>
        <Menu.Item icon={<IconHome size={14} />}>halisyucel.dev</Menu.Item>

        <Menu.Label>Recent Projects</Menu.Label>
        <Menu.Item icon={<IconBrandApple size={14} />}>side-project</Menu.Item>
        <Menu.Item icon={<IconBrandReact size={14} />}>
          another-side-project
        </Menu.Item>
        <Menu.Item icon={<IconBrandNextjs size={14} />}>
          side-project (2)
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
