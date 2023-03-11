import { Box } from '@mantine/core';

export interface TagProps {
  content: string;
}

export default function Tag({ content }: TagProps): JSX.Element {
  return (
    <Box
      className="bg-black/50 px-3 py-1.5   text-xs w-fit rounded-md"
      style={{
        border: '1px solid #373A40',
      }}
    >
      {content}
    </Box>
  );
}
