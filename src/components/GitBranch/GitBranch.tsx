import { Button, Group, Menu, Text } from '@mantine/core';
import { showNotification, updateNotification } from '@mantine/notifications';
import {
  IconArrowBarToDown,
  IconArrowBarToUp,
  IconBrandGit,
  IconGitCommit,
  IconPlus,
  IconTag,
} from '@tabler/icons-react';

export default function GitBranch(): JSX.Element {
  const handlePull = () => {
    showNotification({
      id: 'git-pull',
      title: 'Pulling from origin/main',
      message: 'Checking for updates...',
      autoClose: false,
      disallowClose: true,
      loading: true,
    });

    setTimeout(() => {
      updateNotification({
        id: 'git-pull',
        title: 'Already up to date',
        message: 'No updates found',
        loading: false,
        disallowClose: false,
        autoClose: true,
        color: 'teal',
      });
    }, 2000);
  };

  const handleCommit = () => {
    showNotification({
      id: 'git-commit',
      title: 'No changes to commit',
      message: 'Nothing to commit, working tree clean',
      autoClose: true,
      disallowClose: false,
      loading: false,
      color: 'yellow',
    });
  };

  return (
    <Menu position="bottom-start" offset={4} width={200} withArrow>
      <Menu.Target>
        <Button
          size="xs"
          variant="filled"
          color="dark"
          leftIcon={<IconBrandGit size={16} />}
        >
          main
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconArrowBarToDown size={14} />} onClick={handlePull}>
          Update Project
        </Menu.Item>
        <Menu.Item icon={<IconGitCommit size={14} />} onClick={handleCommit}>
          Commit...
        </Menu.Item>
        <Menu.Item icon={<IconArrowBarToUp size={14} />}>Push...</Menu.Item>

        <Menu.Divider />

        <Menu.Item icon={<IconPlus size={14} />}>New Branch</Menu.Item>

        <Menu.Divider />

        <Menu.Item icon={<IconTag size={14} color="orange" />}>
          <Group position="apart">
            <Text>main</Text>
            <Text fz="xs" c="dimmed">
              origin/main
            </Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
