import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { HttpLink } from '@apollo/client/link/http';
import { useMemo } from 'react';

const GRAPHQL_URI = 'https://unicorn-staging.eu.saleor.cloud/graphql/';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: relayStylePagination(),
      },
    },
  },
});

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_URI,
    }),
    cache,
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
