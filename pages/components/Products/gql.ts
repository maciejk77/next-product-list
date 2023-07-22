import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery($after: String) {
    products(first: 15, channel: "uk", after: $after) {
      edges {
        node {
          id
          name
          slug
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;
