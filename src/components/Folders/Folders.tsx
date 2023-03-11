import { Divider, Stack, Text } from '@mantine/core';

import Links from '@/components/Folders/components/Links';
import NavLinks from '@/components/Folders/components/NavLinks';
import Tags from '@/components/Folders/components/Tags';

export default function Folders(): JSX.Element {
  return (
    <Stack spacing="xs">
      <Stack spacing={0}>
        <Text className="text-4xl text-white font-extrabold font-p22mackinacpro mt-1.5">
          Halis Yücel
        </Text>
        <Text className="text-xl font-light text-gray-400">@halisyucel</Text>
      </Stack>
      <Divider />
      <Tags />
      <Divider />
      <Links />
      <Divider />
      <NavLinks />
    </Stack>
  );
}
