import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery($after: String) {
    products(first: 10, channel: "uk", after: $after) {
      edges {
        node {
          id
          name
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
