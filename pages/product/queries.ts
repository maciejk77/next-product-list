import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID, $slug: String) {
    product(id: $id, slug: $slug, channel: "uk") {
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
  }
`;
