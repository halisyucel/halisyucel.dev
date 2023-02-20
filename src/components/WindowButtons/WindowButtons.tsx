import { Flex } from '@mantine/core';

export default function WindowButtons(): JSX.Element {
  return (
    <Flex className="mx-2" justify="center" align="center" gap={5}>
      {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color) => (
        <span
          key={color}
          className={`${color} w-3 h-3 rounded-full cursor-pointer`}
        />
      ))}
    </Flex>
  );
}
