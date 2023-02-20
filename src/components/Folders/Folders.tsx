import { useQuery } from '@apollo/client';
import { ActionIcon, Divider, Flex, Skeleton, Stack } from '@mantine/core';
import { useEffect } from 'react';

import { renderLinkIcon } from '@/components/Folders';
import { gql } from '@/graphql';

export const GET_LINKS = gql(/* GraphQL */ `
  query GetLinks {
    links: allLinks(orderBy: orderNumber_ASC) {
      linkType
      url
    }
  }
`);

export default function Folders(): JSX.Element {
  const { loading, data } = useQuery(GET_LINKS);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Stack spacing={0}>
      <h1 className="my-2.5 font-p22mackinacpro text-white text-7xl">
        Halis Yücel
      </h1>
      <Divider />
      <Flex gap={5}>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={`skeleton-link-${index}`} height={33} width={33} />
            ))
          : data?.links.map((link) => (
              <ActionIcon
                key={link.linkType}
                size="lg"
                variant="filled"
                color="dark"
                component={'a'}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {renderLinkIcon(link.linkType)}
              </ActionIcon>
            ))}
      </Flex>
    </Stack>
  );
}
