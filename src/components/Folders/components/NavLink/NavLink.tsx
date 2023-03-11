import { Box, Flex } from '@mantine/core';
import { useElementSize, useHover, useMergedRef } from '@mantine/hooks';
import { IconWritingSign } from '@tabler/icons-react';
import Link from 'next/link';
import { useRef } from 'react';

export interface NavLinkProps {
  name: string;
  href: string;
}

export default function NavLink({ name, href }: NavLinkProps): JSX.Element {
  const ref = useRef();

  const { ref: elementSizeRef, width } = useElementSize();
  const { hovered, ref: hoverRef } = useHover();

  const mergedRef = useMergedRef(ref, elementSizeRef, hoverRef);

  return (
    <Box
      href={href}
      ref={mergedRef}
      component={Link}
      className="p-1 pl-0 font-p22mackinacpro text-2xl text-white no-underline relative w-fit"
    >
      <Flex justify="flex-start" align="center">
        <Flex className="z-10" justify="flex-start" align="center">
          <Box>{name}</Box>
          {name === 'Quotes' && <IconWritingSign size={24} className="ml-2" />}
        </Flex>
        <Box
          style={{ width: hovered ? width : 0 }}
          className="absolute bottom-2 left-0 h-2 bg-emerald-500 opacity-70 transition-all"
        />
      </Flex>
    </Box>
  );
}
