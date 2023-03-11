import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = process.env.NEXT_PUBLIC_GRAPHQL_API_KEY as string;

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;
