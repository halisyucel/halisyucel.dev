import { useQuery } from '@apollo/client';
import { ActionIcon, Flex, Skeleton } from '@mantine/core';

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

export default function Links(): JSX.Element {
  const { loading, data } = useQuery(GET_LINKS);

  return (
    <Flex gap={5}>
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={`skeleton-link-${index}`} height={33} width={33} />
          ))
        : data?.links.map(({ linkType, url }) => (
            <ActionIcon
              key={linkType}
              size="lg"
              variant="filled"
              color="dark"
              component={'a'}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderLinkIcon(linkType)}
            </ActionIcon>
          ))}
    </Flex>
  );
}
