import { ActionIcon, Divider, Flex } from '@mantine/core';
import { IconBug, IconPlayerPlayFilled, IconSearch } from '@tabler/icons-react';

import { useAppDispatch, useAppSelector } from '@/redux';
import { setFileAction } from '@/redux/config';

export default function FileActions() {
  const dispatch = useAppDispatch();
  const { isInsideIframe } = useAppSelector((state) => state.config);
  return (
    <Flex gap="xs">
      <ActionIcon
        variant="filled"
        color="dark"
        disabled={isInsideIframe}
        onClick={() => {
          dispatch(setFileAction('running'));
        }}
      >
        <IconPlayerPlayFilled
          size={14}
          style={{ color: isInsideIframe ? '#5b5b5b' : '#03c04a' }}
        />
      </ActionIcon>
      <ActionIcon
        variant="filled"
        color="dark"
        disabled={isInsideIframe}
        onClick={() => {
          dispatch(setFileAction('debugging'));
        }}
      >
        <IconBug
          size={16}
          style={{ color: isInsideIframe ? '#5b5b5b' : '#ff0000' }}
        />
      </ActionIcon>
      <Divider orientation="vertical" />
      <ActionIcon variant="filled" color="dark">
        <IconSearch size={16} style={{ color: '#ffffff' }} />
      </ActionIcon>
    </Flex>
  );
}
