import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery($after: String) {
    products(first: 15, channel: "uk", after: $after) {
      edges {
        node {
          id
          name
          description
          seoTitle
          seoDescription
          slug
          rating
          thumbnail {
            alt
            url
          }
          pricing {
            priceRange {
              stop {
                gross {
                  currency
                  amount
                }
              }
            }
          }
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
