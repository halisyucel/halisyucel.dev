import { useQuery } from '@apollo/client';
import { Flex, Skeleton } from '@mantine/core';

import Tag from '@/components/Tag';
import { gql } from '@/graphql';

export const GET_TAGS = gql(/* GraphQL */ `
  query GetTags {
    tags: allTags(orderBy: orderNumber_ASC) {
      text
    }
  }
`);

export default function Tags(): JSX.Element {
  const { loading, data } = useQuery(GET_TAGS);
  return (
    <Flex wrap="wrap" gap={5}>
      {loading ? (
        <>
          <Skeleton height={30} width={140} />
          <Skeleton height={30} width={90} />
        </>
      ) : (
        data?.tags.map(({ text }) => <Tag key={text} content={text} />)
      )}
    </Flex>
  );
}
